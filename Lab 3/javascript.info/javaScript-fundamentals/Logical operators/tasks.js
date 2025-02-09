alert(null || 2 || undefined); // 2
alert(alert(1) || 2 || alert(3)); // 2 after alert(1)
alert(1 && null && 2); // null
alert(alert(1) && alert(2)); // alert will be work
alert(null || (2 && 3) || 4); //3
if (age >= 14 && age <= 90) alert("");
if (age < 14 || age > 90) alert("");

if (-1 || 0) alert("first"); // will work
if (-1 && 0) alert("second"); // wont work
if (null || (-1 && 1)) alert("third"); // will work

let userName = prompt("Who's there?", "");

if (userName === "Admin") {
  let pass = prompt("Password?", "");

  if (pass === "TheMaster") {
    alert("Welcome!");
  } else if (pass === "" || pass === null) {
    alert("Canceled");
  } else {
    alert("Wrong password");
  }
} else if (userName === "" || userName === null) {
  alert("Canceled");
} else {
  alert("I don't know you");
}
