let userName=document.getElementById("username");
let fName=document.getElementById("fullName");
let phoneNo = document.getElementById("phoneNo");
let pwd=document.getElementById("pwd");
let conPwd=document.getElementById("conpwd");
let form=document.querySelector("form");

function validateInput(){
    //check username is empty 
    if(userName.value.trim()===""){
       onError(userName,"User Name cannot be empty");
    }else{
        onSuccess(userName)
    }
    if(fName.value.trim()===""){
        onError(fName,"your name cannot be empty");
    }else{
       onSuccess(fName)
    }

    //password
    if(pwd.value.trim()===""){
        onError(pwd,"password cannot be empty");
     }else{
        var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        if(pwd.value.match(passw)) 
        { 
            
            onSuccess(pwd);
        }
        else
        { 
            onError(pwd,"Invalid password");
            onError(conPwd,"Invalid password");
            alert("your password must contain\n1.upper and lowercase\n2.from 6 to 20 characters");

        }
         
     }
     if(conPwd.value.trim()===""){
        onError(conPwd,"password cannot be empty");
     }else{
         if(pwd.value.trim()!==conPwd.value.trim()){
            onError(conPwd,"Password & Confirm password not matching");
         }
         else
         onSuccess(conPwd);
     }
     //phone number 
     var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
     if(phoneNo.value.match(phoneno)){
         onSuccess(phoneNo)
     }else if(phoneNo.value.trim()===""){
        onError(phoneNo,"phone number cannot be empty");
     }else
           {
            onError(phoneNo,"Invalid phone number");
           }
}


document.getElementById("signBtn")
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
}
function onError(input,message){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="visible";
    messageEle.innerText=message;  
    parent.classList.add("error");
    parent.classList.remove("success");

}



