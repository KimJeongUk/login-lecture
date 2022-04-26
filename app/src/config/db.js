const mysql = require("mysql");

const db = mysql.createConnection({
    host : "admin.cwx5iyoayjgj.ap-northeast-2.rds.amazonaws.com",
    user: "admin",
    password: 'rbfrbfrbf3',
    database: "login_lecture",
});

db.connect();

module.exports = db;