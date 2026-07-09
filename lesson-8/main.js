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

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isStudent: false,
  hobbies: ["reading", "coding", "gaming"],
  address: { city: "New York", country: "USA" },
};

console.log(person.firstName, person["lastName"], person.address.city);
person.age = 31;
person.email = "john@example.com";
delete person.isStudent;

const calculator = {
  add: function (a, b) { return a + b; },
  subtract(a, b) { return a - b; },
  multiply: (a, b) => a * b,
};
console.log(calculator.add(5, 3));

const scores = { math: 95, english: 88, science: 92 };
console.log(Object.keys(scores));
console.log(Object.values(scores));
console.log(Object.entries(scores));
for (const [subject, score] of Object.entries(scores)) {
  console.log(`${subject}: ${score}`);
}