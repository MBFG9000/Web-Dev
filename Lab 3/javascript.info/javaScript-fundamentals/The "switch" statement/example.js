let res = "404";

switch (res) {
  case "404":
    alert("Client Error");
    break;
  case "200":
    alert("Everything is OK");
    break;
  case "500":
    alert("Server Error");
    break;
  default:
    alert("There is no understandable response");
    break;
}

let a = 3;

switch (a) {
  case 4:
    alert("Right!");
    break;

  case 3: // (*) grouped two cases
  case 5:
    alert("Wrong!");
    alert("Why don't you take a math class?");
    break;

  default:
    alert("The result is strange. Really.");
}
