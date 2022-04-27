// const http = require("http");
// const app = http.createServer((req,res) => {
//     res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"} );
//     if(req.url ==="/"){
//         res.end("여기는 루트입니다");
//     }
//     else if(req.url ==="/login")
//     {
//         res.end("여기는 로그인화면입니다");
//     }
// });

// app.listen(3001, () =>{
//     console.log("http로 가동된 서버");
// });
"use strict";
//모듈
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv"); //환경변수
const morgan = require("morgan"); // 로그
dotenv.config();

const app = express();

// 라우팅
const home = require("./src/routes/home");


const accessLogStream = require("./src/config/log.js");

//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); //url을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 제대로 인식되지 않는 문제 해결
app.use(morgan("common",{ stream : accessLogStream }));
app.use(morgan("dev"));

app.use("/", home); // use -> 미들웨어를 등록해주는 메소드

module.exports = app;