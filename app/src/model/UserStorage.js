"use strict"

const db = require("../config/db.js");

class UserStorage {
    // static으로 접근가능 #으로 은닉화
    // 데이터를 가공하면 was 
    // 데이터를 있는 그래도 보면 Web Server
    static getUserInfo(id){
        return new Promise((resolve, reject) =>{
            const query = "SELECT * FROM users WHERE id = ?;";
            db.query(query, [id] , (err, data) =>{
                if(err) reject(`${err}`);
                else resolve(data[0]);
                // console.log(data[0]);
            });
        });
   
    }

   

    static async save(userInfo) {
        return new Promise((resolve, reject) =>{
            const query = "INSERT INTO users(id, name, pwd, image) VALUES(?,?,?,?);";
            db.query(query, 
                [userInfo.id, userInfo.name, userInfo.pwd, userInfo.image], 
                (err) =>{
                if(err) reject(`${err}`);
                else resolve({ success : true });
            });
        });

        
    
      
     

    }
}

module.exports = UserStorage;