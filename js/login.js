
//login user

let username=document.getElementById("username");
let password=document.getElementById("password");

let login_btn=document.getElementById("signIn");


let getUser=localStorage.getItem("username");
let getPassword=localStorage.getItem("password");

login_btn.addEventListener("click",login);


function login(e){
    e.preventDefault();
    if(username.value==="" || password.value===""){
        alert("Please Enter Data");
    }
    else{
        if(getUser && getUser.trim()===username.value.trim()  && getPassword && getPassword===password.value){

            setTimeout(()=>{
                window.location="index.html";
              },1500)

        }
        else{
            alert("Wrong username or Password")
        }



    }
}