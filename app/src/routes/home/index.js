"use strict";

const express = require("express");
const router = express.Router();

// 컨트롤러
const ctrl = require("./home.ctrl");

//루트 화면
router.get("/", ctrl.output.home);

//login 화면
router.get("/login",ctrl.output.login);
router.post("/login",ctrl.process.login);

//register 화면
router.get("/register",ctrl.output.register);
router.post("/register",ctrl.process.register);


module.exports = router;
