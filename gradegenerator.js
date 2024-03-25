// Prompt the user to enter student marks
const prompt = require("prompt-sync")({ sigint: true });
const marks = prompt("Enter Students marks ");
// declare function studentGrade
function studentGrade(){
    if  ( marks > 100){
       return "not gradable"
     } 
     else if (marks < 0){
       return "not gradable"
     } 
     else if (marks>79) {
         return "A";   
     } 
     else if (marks>=60 && marks<=79){
         return "B";
     }
     else if (marks> 49 && marks <= 59){
         return "C";
     }
     else if (marks >= 40 && marks <= 49){
         return "D";
     
     }
     else  (marks < 40) 
         return "E";
     
 }
    // Call the function  
    console.log(studentGrade());