
let counter = 0;

while (counter < 5) {
  counter += 1;
}

do {
  i++;
} while (i < 5);

console.log(i);

for (let i = 0; i < 10; i++) {
  console.log(i);
}

let i = 0; // we have i already declared and assigned

for (; i < 3; i++) {
  // no need for "begin"
  alert(i); // 0, 1, 2
}
let res;
while (1) {
  console.log("loop is working");
  res = +prompt("Enter a number");

  if (!res) break; // (*)
}

for (let i = 0; i < 10; i++) {
  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;

  alert(i); // 1, then 3, 5, 7, 9
}

outerLoop : for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 5; j++) {
        console.log(i , j);

        if(i==3 && j==4){
            break outerLoop;
        }
    }
    
}