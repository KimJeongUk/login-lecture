"use script";

const id = document.querySelector("#id");
const name = document.querySelector("#name");
const pwd = document.querySelector("#pwd");
const confirmPwd = document.querySelector("#confirm-pwd");
const registerbtn = document.querySelector("#button");

registerbtn.addEventListener("click", register);

function register(){
    const req ={
        id: id.value,
        name: name.value,
        confirmPwd: confirmPwd.value,
        pwd: pwd.value,
    };

    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if(res.success) {
                location.href ="/login";
            }
            else {
                alert(res.msg);
            }
        })
        .catch((err) => {
            console.error("회원가입 중 에러 발생");
        });
}