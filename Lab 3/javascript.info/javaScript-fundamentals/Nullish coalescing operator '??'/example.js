let name;
console.log(name ?? "not defined")
name = null;
console.log(name ?? "not defined");
name = 'Bob';
console.log(name ?? "not defined");

let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first defined value:
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

// without parentheses
let area = height ?? 100 * width ?? 50;

// ...works this way (not what we want):
area = height ?? (100 * width) ?? 50;