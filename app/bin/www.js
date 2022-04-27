"use strict";

const app = require("../app.js");
// 포트
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("서버 가동");
})