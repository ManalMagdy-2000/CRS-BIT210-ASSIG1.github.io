/*
* Name: Manal Magdy
* ID: B1901825
*/
var app1 = document.getElementById("appBtn1");
var app2 = document.getElementById("appBtn2");
var app3 = document.getElementById("appBtn3");
var app4 = document.getElementById("appBtn4");
var app5 = document.getElementById("appBtn5");
var app6 = document.getElementById("appBtn6");
var app = [app1,app2,app3,app4,app5,app6];
for(var i=0; i<app.length; i++){
    app[i].addEventListener('click',function (ev){
        ev.preventDefault();
        'use strict';
         window.location.href="viewApplication.html";
    
    });
}

//view application page
function myFunction() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}


