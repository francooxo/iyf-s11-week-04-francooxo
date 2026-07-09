const fruits = ["apple", "banana", "orange"];
fruits.push("grape");
fruits.unshift("mango");
fruits.pop();
fruits.shift();
console.log(fruits);

const numbers = [1, 2, 3, 4, 5, -2, -8, 15];

const doubled = numbers.map((num) => num * 2);
const positives = numbers.filter((num) => num >= 0);
const firstOverTen = numbers.find((num) => num > 10);
const product = numbers.reduce((total, num) => total * num, 1);

console.log(doubled);
console.log(positives);
console.log(firstOverTen);
console.log(product);