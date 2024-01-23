// Reduce method reduces the array to one value
let numbers = [100, 200, 300, 400];
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Should give us the sum of all the numbers