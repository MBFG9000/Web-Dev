let year = prompt(
  "In which year was ECMAScript-2015 specification published?",
  ""
);

if (year == 2015) alert("You are right!");

if (year == 2015) {
  alert("That's correct!");
  alert("You're so smart!");
}

if (0) {
  // 0 is falsy
}

if (1) {
  // 1 is truthy
  console.log("always works");
}

let cond = year == 2015; // equality evaluates to true or false

if (cond) {
  console.log("year is 2015");
}

year = prompt(
  "In which year was the ECMAScript-2015 specification published?",
  ""
);

if (year == 2015) {
  alert("You guessed it right!");
} else {
  alert("How can you be so wrong?"); // any value except 2015
}

year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year < 2015) {
  alert( 'Too early...' );
} else if (year > 2015) {
  alert( 'Too late' );
} else {
  alert( 'Exactly!' );
}

let accessAllowed = (age > 18) ? true : false;