let value = true; //Boolean
alert(typeof value); // boolean

value = String(value); // now value is a string "true"
alert(typeof value); // string

//Numeric Conversion

alert("6"/"2");
let notnumber = "4";
console.log(typeof notnumber);
Number(notnumber); 
console.log(typeof notnumber);


alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (error reading a number at "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0

alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hello") ); // true
alert( Boolean("") ); // false

alert( Boolean("0") ); // true
alert( Boolean(" ") ); // spaces, also true (any non-empty string is true)  