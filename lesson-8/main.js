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

const students = [
  { name: "Alice", age: 22, grade: 85, major: "CS" },
  { name: "Bob", age: 20, grade: 72, major: "Math" },
  { name: "Charlie", age: 23, grade: 90, major: "CS" },
  { name: "Diana", age: 21, grade: 88, major: "Physics" },
  { name: "Eve", age: 22, grade: 95, major: "CS" },
];

const names = students.map((s) => s.name);
const highAchievers = students.filter((s) => s.grade > 80);
const charlie = students.find((s) => s.name === "Charlie");
const avgGrade = students.reduce((sum, s) => sum + s.grade, 0) / students.length;
const csMajors = students.filter((s) => s.major === "CS");
const sortedByGrade = [...students].sort((a, b) => b.grade - a.grade);
const hasTopStudent = students.some((s) => s.grade > 90);
const allPassing = students.every((s) => s.grade >= 60);

console.log(names, highAchievers, charlie, avgGrade, csMajors, sortedByGrade, hasTopStudent, allPassing);