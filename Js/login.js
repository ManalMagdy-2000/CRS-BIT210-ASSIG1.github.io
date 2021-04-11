/*
* Name: Manal Magdy
* ID: B1901825
*/
let userName=document.getElementById("username");
let pwd=document.getElementById("password_login");
let form=document.querySelector("form");

function validateInput(){
    //check username is empty 
    if(userName.value.trim()===""){
       onError(userName,"User Name cannot be empty");
    }else{
        onSuccess(userName);
    }


    //password
    if(pwd.value.trim()===""){
        onError(pwd,"password cannot be empty");
     }else{
         onSuccess(pwd);
     }
}

document.getElementById("logBtn")
.addEventListener("click",(event)=>{
    event.preventDefault();
    validateInput();
});

function onSuccess(input){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="hidden"; 
    parent.classList.remove("error");
    parent.classList.add("success"); 
    console.log(document.getElementById("username").value);
    var name = document.getElementById("username").value;

    if(name.includes("_manager")){
        window.location.href = "manager.html";
    }else if(name.includes("_staff")){
        window.location.href = "staff.html";
    }
    else if(name.includes("_volunteer")){
        window.location.href = "volunteerHomePage.html";
    }
    else{
        onError(userName,"Invalid");
        alert("1. to login as a volunteer .\n       username_volunteer\n2. to login as a staff member.\n       username_staff\n3. to login as a manager\n     username_manager. ");
    } 
}
function onError(input,message){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="visible";
    messageEle.innerText=message;  
    parent.classList.add("error");
    parent.classList.remove("success");

}
