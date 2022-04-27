"use script";

const id = document.querySelector("#id");
const pwd = document.querySelector("#pwd");
const loginbtn = document.querySelector("#button");

loginbtn.addEventListener("click", login);

function login(){
    if(!id.value){
        return alert("아이디를 입력해주십시오");
    }
    if(!pwd.value){
        return alert("비밀번호를 입력해주세요");
    }
    const req ={
        id: id.value,
        pwd: pwd.value,
    };

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if(res.success) {
                location.href ="/";
            }
            else {
                if(res.err) return alert(res.err);
                alert(res.msg);
            }
        })
        .catch((err) => {
            console.error("로그인 중 에러 발생");
        });
}