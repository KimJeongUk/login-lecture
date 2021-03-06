"use script";

const id = document.querySelector("#id");
const name = document.querySelector("#name");
const pwd = document.querySelector("#pwd");
const confirmPwd = document.querySelector("#confirm-pwd");
const image = document.querySelector("#image")
const registerbtn = document.querySelector("#button");

registerbtn.addEventListener("click", register);

function register(){
    if(!id.value){
        return alert("아이디를 입력해주십시오");
    }
    if(pwd.value !== confirmPwd.value){
        return alert("비밀번호가 일치하지 않습니다");
    }
    if(!image.value)
    {
        return alert("파일을 넣어주십시오");
    }
    const req ={
        id: id.value,
        name: name.value,
        pwd: pwd.value,
        image: image.value,
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
                if(res.err) return alert(res.err);
                alert(res.msg);
            }
        })
        .catch((err) => {
            console.error("회원가입 중 에러 발생");
        });
}