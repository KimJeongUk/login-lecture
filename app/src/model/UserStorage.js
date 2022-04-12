"use strict"

class UserStorage {
    static #users = {
        id: ["wjddnr0222","asdf"],
        pwd: ["123", "1324"],
        name: ["김정욱", "ㅁㄴㅇㄹ"],
    };
    // static으로 접근가능 #으로 은닉화

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) =>{
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});

        return newUsers;
    }
}

module.exports = UserStorage;