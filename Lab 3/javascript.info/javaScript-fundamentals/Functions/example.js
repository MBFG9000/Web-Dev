function WhoIsHisName() {
  let result = prompt("What is your name?", undefined);
  //variables here are scoped by function and exist only here
  return result;
}

function Hypotenuse(a, b) {
  return Math.sqrt(a ** 2 + b ** 2);
}

let a = 4;
let b = 3;

console.log(Hypotenuse(a, b));

function ShowMessage(message, from = "Anonymous") {
  // if from will be undefined default value can be used
  // same as from = from || "Anonymous" in situation if there is no falsy values
  // exactly same as from = from ?? "Anonymous"

  alert(message + " from " + from);
}

function doNothing() { /* empty */ }

alert( doNothing() === undefined ); // true

//one function - one action
//naming is very important
