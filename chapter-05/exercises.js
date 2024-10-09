// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) {
  //declare flattened as the result of invoking the reduce method on the input array to concat all subarrays into a single array
let flattened = array.reduce(function(a,b){
  return a.concat(b);
}, []);
return flattened; //return flattened
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(array, test, update, body) {
  //use a for loop to iterate through the array, testing the current value until it becomes false and updating it to begin the loop again
 for (let i = array; test(i); i = update(i)){
  body(i); //call the body function with the current value passed in
 }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, test) {
  let result;
  if (array.length === 0){
    return true;
  } else{
for (let i = 0; i < array.length; i++){
  if (test(array[i]) === true){
    result = true
  } else {
    result = false;
  }
} return result;
  }
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(string) {
  //declare ltr as an empty array
let ltr = [];
//declare rtl as an empty array
let rtl = [];
//use a for loop to iterate through the input string
for (let i = 0; i < string.length; i++){
  //declare script as the result of invoking characterScript on the current character's char code
  let script = characterScript(string.charCodeAt(i));

//if script doesn't equal null
  if (script!== null){
    //if the script directoin is "ltr", push script into ltr
    if (script.direction === "ltr"){
      ltr.push(script);
    } else { //push script into rtl
      rtl.push(script);
    }
  }
} //if the length of ltr is greater than the length of rtl, return "ltr"
if (ltr.length > rtl.length){
  return "ltr"
} else { //else return "rtl"
  return "rtl";
}
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};