// get data from local storage

let get_user=localStorage.getItem("username");
let get_email=localStorage.getItem("email");



//variables

let userInput =document.getElementById("changeName");
let userEmailInput =document.getElementById("changeEmail");
let editForm =document.getElementById("edit-profile-form");



// setting valuees of inputs
userInput.value=get_user;
userEmailInput.value=get_email;


//events

editForm.addEventListener("submit",editProfileData);

function editProfileData(e){
    e.preventDefault();

    localStorage.setItem("username",userInput.value);
    localStorage.setItem("email",userEmailInput.value);

    setTimeout(()=>{
        window.location="profile.html"
    },500);
}
