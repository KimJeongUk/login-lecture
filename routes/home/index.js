"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

//루트 화면
router.get("/", ctrl.home);

//login 화면
router.get("/login",ctrl.login);


module.exports = router;
