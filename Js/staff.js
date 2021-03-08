function generateTripID(ev){
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
    alert("Successfully created!"+"\nTrib ID: "+ randomID );

}