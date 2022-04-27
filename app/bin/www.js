"use strict";

const app = require("../app.js");
// 포트
const PORT = process.env.PORT || 3000;

const logger = require("..//src/config/logger");

app.listen(PORT, () => {
    logger.info(`${PORT} 포트에서 서버가 가동되었습니다`)
})