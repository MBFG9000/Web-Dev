//We can put any type in a variable. For example, a variable can at one moment be a string and then store a number

let message = "Hello";

message = 3;

//Number

let n = 1;
n = 1.34;

console.log(1 / 0); //Infinity

console.log("i swear its number" / 1); //NaN

let misterBigInt = 131321410930579645n;

console.log(misterBigInt);

//String

let str = "this is string";
let str2 = "this is string also";
let phrase = `this string has str in itself ${str}`;

//Boolean

let iamfalse = true;
let agechecked = false;
let isGreater = 4 > 1;

//null value 

let age = null;

//undefined value 

let name;
console.log(name);

typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)