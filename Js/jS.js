/* sticky navbar
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};
// Get the navbar
var navbar = document.getElementById("navbar");
// Get the offset position of the navbar
var sticky = navbar.offsetTop;
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}*/
/*-------------------------login page----------------------- */
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

 /*----------------------------------------------Validation----------------------*/
 //password validation
 /* wronggggggggggggg
 function(password_login);
 var pass = document.getElementById("password_login");
 

 //phone number validation
 var phone = document.getElementById("phoneNo");
 function phonenumber(phone)
{
  var phoneNoformat = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if(phone.value.match(phoneNoformat))
     {
	   return true;      
	 }
   else
     {
	   alert("Not a valid Phone Number");
	   return false;
     }
}

function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }*/
  /*--------------------------------End Validation--------------------------*/
  /*-------------------------------start (record staff)--------------------*/
/*var recordStaff =document.getElementById("recordStaff");
recordStaff.addEventListener("click" , displayStaffDetails);
var  row = 1;  // to keep track of how many rows 
function displayStaffDetails(ev){
    ev.preventDefault();
    var recordUsername = document.getElementById("recordUsername").value;
    var recordName = document.getElementById("recordName").value;
    var recordPassword = document.getElementById("recordPassword").value;
    var recordPhoneNo = document.getElementById("recordPhoneNo").value;
    var recordPosition = document.getElementById("recordPosition").value;
    var recordDate = document.getElementById("recordDate").value;
    /*if(recordName == null){
        //why cannot use isEmpty() method ???
        ev.preventDefault();
        alert("Please fill all the boxes!");
    }
    
    var staffList = document.getElementById("staffList");
    // to inster new row in staff list table 
    var newRow = staffList.insertRow(row);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    // to append text for each cell
    cell1.innerHTML = recordUsername;
    cell2.innerHTML = recordName ;
    cell3.innerHTML = recordPassword ;
    cell4.innerHTML = recordPhoneNo ;
    cell5.innerHTML = recordPosition;
    cell6.innerHTML = recordDate;
    row++; // should increament the row otherwise the new values will replace the current row
}*/

  /*-------------------------------End (record staff)--------------------*/
  /*-----------------------------start volunteer page -----------------*/
  function selectExpiryDate() {
    // Get the radius button
    var radiusBtn = document.getElementById("selectDate");
    // Get date button
    var text = document.getElementById("dateBtn");
    // If the radius button  is checked, display the date input
    if (radiusBtn.checked == true){
       dateBtn.style.display = "block";
    } else {
      dateBtn.style.display = "none";
    }
  }
  // update button
  var b = document.getElementById("manageSubmitBtn");
  b.addEventListener("click", updateProfile);
  function updateProfile(ev){
    ev.preventDefault();
    alert("your account succefully updated!");
  }