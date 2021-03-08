/*
* Name: Manal Magdy
* ID: B1901825
*/
function validateFullName() {
    var x = document.forms["signUpForm"]["fullName"].value;
    if (x == "") {
      alert("Full Name must be filled out");
      return false;
    }
  }
  function phonenumber(phone)
{
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if((phone.value.match(phoneno))
        {
      return true;
        }
      else
        {
        alert("invalid Password!!");
        return false;
        }
}