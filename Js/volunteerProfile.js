/*
* Name: Manal Magdy
* ID: B1901825
*/
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