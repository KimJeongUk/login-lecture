"use strict"

const fs = require("fs").promises;

class UserStorage {
    // static으로 접근가능 #으로 은닉화
    static #getUserInfo(data,id){
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users); // => [id, pwd, name] 배열 생성
        const userInfo = userKeys.reduce((newUser, info) => {
             newUser[info] = users[info][idx];
            return newUser;
            }, {});

            
        return userInfo;
    }

    static getUsers(...fields) {
        // const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) =>{
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});

        return newUsers;
    }

    static getUserInfo(id){
        return fs
        .readFile("./src/databases/users.json")
        .then((data) => {
            return this.#getUserInfo(data,id);
        })
        .catch(console.error); 
        
    }

   

    static save(userInfo) {
        // const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.pwd.push(userInfo.pwd);
        console.log(users)


    }
}

module.exports = UserStorage;