let status;
var joinTrip1 = document.getElementById("tripBtn1");
var joinTrip2 = document.getElementById("tripBtn2");
var joinTrip3 = document.getElementById("tripBtn3");
var joinTrip4 = document.getElementById("tripBtn4");
var joinTrip5 = document.getElementById("tripBtn5");
var joinTrip6 = document.getElementById("tripBtn6");
var joinTrip = [joinTrip1,joinTrip2,joinTrip3,joinTrip4,joinTrip5,joinTrip6];
for(var i=0; i<joinTrip.length; i++){
    joinTrip[i].addEventListener('click',function (ev){
        'use strict';
        ev.preventDefault();
        var chars = '1234567890ABCDEFGHIJKLMNOPQRSTUVWYZabcdefghijklmnopqrstuvwxyz',
        idLength=8 ,
        randomID = '',
        i,
        randomNum;
        for(i = 0; i <idLength; i=i+1){
            randomNum = Math.floor(Math.random() * chars.length);
            randomID+= chars.substring(randomNum , randomNum+1);
        }
        var date = new Date();
        status = "NEW"
        alert(" Application submitted successfully \n Date: " + date +"\n Apllication ID: "+ randomID + "\n Status: "+status);
    
    });
}






