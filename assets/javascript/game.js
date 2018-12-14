$(document).ready(function(){
   var GeneratedNumber = Math.floor((Math.random()* 124)+ 19);
   $('#randomNumber').text(GeneratedNumber);
   //test
   console.log(GeneratedNumber);


var wins = 0;
var losses = 0;
var total = 0;

//test
console.log(wins);
console.log(losses);
console.log(total);


$('#wins').text(wins);
$('#losses').text(losses);



var blue = Math.floor((Math.random()* 12) + 1);
var green = Math.floor((Math.random()* 12) + 1);
var pink = Math.floor((Math.random()* 12) + 1);
var purple = Math.floor((Math.random()* 12) + 1);

//testing out my crystal functions
console.log(blue);
console.log(green);
console.log(pink);
console.log(purple);


function reset(){
    GeneratedNumber=Math.floor(Math.random()*24+19);
    console.log(GeneratedNumber);
    $('#randomNumber').text(GeneratedNumber);
    blue= Math.floor(Math.random()*12+1);
    green= Math.floor(Math.random()*12+1);
    pink= Math.floor(Math.random()*12+1);
    purple= Math.floor(Math.random()*12+1);
    total= 0;
    $('#total').text(total);
    }; 

    
    

function winner(){
  //come back to work a better way to display other then alert --
alert("You won!");
wins++; 

$('#wins').text(wins);
reset();
}



function loser(){
  //come back to work a better way to display other then alert --
alert ("You lose!");
losses++;
$('#lossess').text(losses);
reset()
}

//sets up click for jewels 
$('#blue').on ('click', function(){
  
  //I could not get the click to work --- after a day of debugging figured out it was with the html. In html used the <a href"#"></a> before the img tag... and would reload page... then I debugged it and the code wouldnt work. So i deleted it all becuase I was getting confused. So I NEED to revist. 
  //do I need to put a function in the DOM for the click on image? I saw so many different solutions and all the ones that I tried. Did not work. 
});  
$('#green').on ('click', function(){
    
  }); 
  $('#pink').on ('click', function(){
    
  });
  $('#purple').on ('click', function(){
    
  });  
}); 
