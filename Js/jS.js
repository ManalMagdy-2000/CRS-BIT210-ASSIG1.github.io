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
/*----------------------organize trip--------------------*/
 






