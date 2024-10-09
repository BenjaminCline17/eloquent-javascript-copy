////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step=1) {
//declare output as an empty array
let output = [];
//if start is less than end, count up using a for loop
if (start < end && step > 0){
  for (let i = start; i <= end; i += step){
    //push the current number into output
    output.push(i)
  }
} else if (start > end && step < 0){ //else if start is greater than end, count down using a for loop
for (let i = start; i >= end; i -= step){
  //push the current number into output
  output.push(i)
}
} return output; //return output
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
//declare result as 0
let result = 0;
//use a for loop to iterate through the array
for (let i = 0; i < array.length; i++){
  //add the current number to result
  result += array[i];
} return result; //return result
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  //declare output as an empty array
let output = [];
//use a for loop to iterate through the array backwards
for (let i = array.length - 1; i >= 0; i--){
  //push the current element into the output array
  output.push(array[i]);
} return output; //return output
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
//use a for loop to iterate through half the array
for (let i = 0; i < Math.floor(array.length / 2); i++){
  //declare temp as the current element of array
  let temp = array[i];
  //set the current element equal to the length of the array minus 1 minus the current index
  array[i] = array[array.length - 1 - i];
  //set the result of the array length minus 1 minus i to temp
  array[array.length - 1 - i] = temp;
} return array; //return array
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  let rest = null;

  for (let i = array.length - 1; i >= 0; i--){
    rest = { value: array[i], rest: rest};
  }

  return rest;

}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list, array=[]) {
//base
if (list.rest === null){
  array.push(list.value);
  return array;
}
//recursion
array.push(list.value);

return listToArray(list.rest, array);
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(element, list) {
//declare startAdd as the result of adding the element to the beginning of list
let startAdd = {value: element, rest: list};
return startAdd; //return startAdd
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, number) {
  //if there is no list, return undefined
if (!list){
  return undefined
  //else if number equals 0, return the value of list
} else if (number == 0){
  return list.value;
} else {
  //else return the nth function with the rest element of list and the number - 1
  return nth(list.rest, number - 1);
}
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(x, y) {
  //use an if statement to determine if x and y are not objects
if (typeof x !== "object" && typeof y !== "object"){
  return x === y;
}
//use an if statement to determine x or y are not objects
if (typeof x !== "object" || typeof y !== "object"){
  return false;
}
//create arrays of both of the input keys
let xKeys = Object.keys(x);
let yKeys = Object.keys(y);
//if the length of Xkeys is not the same as the length of yKeys, return false
if (xKeys.length !== yKeys.length){
  return false;
}
//use a for loop to iterate to determine if the array keys match and the values at keys match
for (let i = 0; i < xKeys.length; i++){
  //if the current key is not included in yKeys, return false
  if (!yKeys.includes(xKeys[i]) || !deepEqual(x[xKeys[i]], y[xKeys[i]])){
    return false;
  }
}
return true; //return true if x and y deeply equal each other
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};