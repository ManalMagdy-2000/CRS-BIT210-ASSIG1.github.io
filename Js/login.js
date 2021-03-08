/*
* Name: Manal Magdy
* ID: B1901825
*/
function redirect(e){   
    e.preventDefault();
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

 }