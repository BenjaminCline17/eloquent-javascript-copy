
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called `triangles` that takes in a parameter of a
number. This number determines the "size" of the triangle you need to log. 
HINT: each "level" of the triangle needs to be logged individually.

example: triangles(3);
LOGS =>

#
##
###

example: triangles(5);
LOGS =>

#
##
###
####
#####

*/

function triangles(number) {
  //use a for loop to generate a line of #, adding a # each time we iterate
  for (let i = "#"; i.length <= number; i += "#"){
    //log i
    console.log(i);
  }
}


////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called fizzBuzz that takes in two parameters - 
`start`, `end`. `start` and `end` both represent numbers. This function should
access each number from `start` to `end` and log different statements depending
on the number:

  - if the number is divisible by 3, log "fizz"
  - if the number is divisible by 5, log "buzz"
  - if the number is divisible by both 3 & 5, log "fizzbuzz"
  - if the number is not divisible by 3 or 5, log the number
*/

function fizzBuzz(start, end) {
  //use a for loop to generate numbers
  for (let i = start; i <= end; i++) {
    //if current number is divisible by 3, log "fizz"
    if (i % 3 == 0 && i % 5 != 0){
      console.log("fizz");
      //else if current number is divisible by 5, log "buzz"
    } else if (i % 3 != 0 && i % 5 == 0){
      console.log("buzz");
      //else if current number is divisible by both 3 and 5, log "fizzbuzz"
    } else if (i % 3 == 0 && i % 5 == 0){
      console.log("fizzbuzz");
      //else log the current number
    } else { 
      console.log(i);
    }
  } 
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called drawChessboard that takes in a parameter of
`x` that represents the "size" of the chessboard you are going to log. The chessboard
will be a collection of spaces and #'s creating the appearance of a chessboard.

Note: in order to do this correctly, you need to ultimately create a string containing
linebreak characters (\n). For example, if you invoke drawChessboard(3) it should log a
string that looks like this " # \n# #\n # \n# #"

example: drawChessboard(4);
LOGS =>

 # #
# #
 # #
# #

exampmle drawChessboard(3);
LOGS =>

 # 
# #
 #

*/

function drawChessboard(x) {
//declare a empty string
var result = "";

//use a for loop to generate numbers
for (let i = 0; i < x; i++){
  //create a nested for loop to generate second group of numbers
  for (let j = 0; j < x; j++){
    //use an if statement to see if the result of i + j is divisible by 2
    if ((i + j) % 2 == 0){
      //if it is, add a space
      result += " "
    } else {//else add a "#"
      result += "#"
    }
  }
  //add a line break
  result += "\n"
}
console.log(result); //log the result
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}