var recordStaff =document.getElementById("recordStaff");
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
    }*/
    
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
}

  /*-------------------------------End (record staff)--------------------*/