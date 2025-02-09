//simple OR || , AND && operations

let A = true;
let B = false;
console.log(A || B); // true
console.log(A && B); //false
//Js feature

let name = "";
let ID = "";

let result = ID || name || "Anonymous";
console.log(result);


true || alert("not printed");
false || alert("printed");

alert( 1 && 2 && null && 3 ); // null
alert( 1 && 2 && 3 ); // 3, the last one

let value = true;
value = !value; //false
