//THIS IS LITERALLY THE SAME AT THE SCRIPT BOX IN THE OG HTML FILE
// Psuedocode: write the steps for the assignment
// Don't really know if this is the correct writing for pseudocode but here:
// Step 1: Create a string message for the user saying "You have received this message because you have been chosen to open an important vault. Here is the secret combination:"
const stringmessage =
  "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";
// Step 2: Define 3 variable which each one being the result of 3 different calculations
// For 10 use operation (5*2)
var num1 = 5 * 2;
console.log(num1);
// For 40 use (200-160)
var num2 = 200 - 160;
console.log(num2);
// For 39 use (25+14)
var num3 = 25 + 14;
console.log(num3);
// Step 3: Make a dialogue box displaying the vault code and text if using HTML and a script tag, or create a popup dialog
let FinalMessage = stringmessage + num1 + "-" + num2 + "-" + num3;
alert(FinalMessage);
