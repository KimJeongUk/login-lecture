"use script";

const id = document.querySelector("#id");
const pwd = document.querySelector("#pwd");
const loginbtn = document.querySelector("button");

loginbtn.addEventListener("click", login);

function login(){
    const req ={
        id: id.value,
        pwd: pwd.value,
    };
    console.log(req);
    console.log(JSON.stringify(req));

    fetch("/login",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req)
    })
}