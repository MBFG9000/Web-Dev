let i = 3;

while (i) {
  alert(i--);
}
//last value will be 1

i = 0;
while (++i < 5) alert(i); // 1-4

i = 0;
while (i++ < 5) alert(i); // 1-5

for (let i = 0; i < 5; i++) alert(i);
for (let i = 0; i < 5; ++i) alert(i);
//same 1-4

for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert(i);
  }
}

i = 0;
while (i < 3) {
  alert(`number ${i}!`);
  i++;
}

let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

let n = 10;

nextPrime: for (let i = 2; i <= n; i++) {
  // for each i...

  for (let j = 2; j < i; j++) {
    // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  alert(i); // a prime
}
