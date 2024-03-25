// Prompt the user to enter the speed of the car 
const prompt = require("prompt-sync")({ sigint: true });
const speed = prompt("Enter car speed ");
// Function to calculate the demerit points 
function calculateDemeritPoints() {
    const maximumSpeed= 70;
    let demeritPoints = 0;

    if (speed <= maximumSpeed) {
          return ("Ok");
    }
     else if (demeritPoints = Math.floor((speed - maximumSpeed) / 5)){
           console.log (`Points: ${demeritPoints}`);
    }

     else (demeritPoints > 12) 
         return ("License suspended");
    
}


console.log(calculateDemeritPoints());