////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(num1, num2) {
  //use if statement to determine if the first number is greater than the second
if (num1 > num2){
  //if num1 is greater than num2, return num2
  return num2;
  //else if the first number is less than the second number
} else if (num1 < num2){
  //return num1
  return num1;
} else { //if both numbers are equal to each other, return 0
  return 0;
}
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(n) {
//use an if statement to see if n equals 0
if (n == 0){
  //if n equals 0, return true
  return true;
  //else if n equals 1, return false
} else if (n == 1){
  return false;
  //else if n is less than 0
} else if (n < 0){
  //return the function begin invoked on negative n
  return isEven(-n);
  // else, return the function being invoked on n - 2
} else {
  return isEven(n - 2);
}
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChars(string, char) {
//declare counter as a number
let counter = 0;
//use a for loop to iterate through the string
for (let i = 0; i < string.length; i++){
  //use a if statement to determine if the current character in the string equals char
  if (string[i] == char){
    //add one to the counter
    counter++;
  }
} return counter; //return the final result of counter
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs(string) {
//declare counter as a number
let counter = 0;
//use a for loop to iterate through the string
for (let i = 0; i < string.length; i++){
  //if the current character in the string equals "B", add one to the counter
  if (string[i] == "B"){
    counter++
  }
} return counter; //return the final result of counter
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};