
let userInfo=document.querySelector("#user-info");
let user=document.querySelector("#user");
let links=document.querySelector("#links");
let logoutbtn=document.getElementById("logout");


if(localStorage.getItem("username")){
    links.remove();
    userInfo.style.display="flex";
    user.innerHTML=localStorage.getItem("username");
}

logoutbtn.addEventListener("click",function(){
    localStorage.clear();
    setTimeout(()=>{
        window.location="register.html"
    },1500)
});
