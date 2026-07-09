let studentName = "Jane Wanjiru";
let age = 24;
const isStudent = true;
let favoriteColors = ["teal", "coral", "navy"];
let today = new Date();

console.log(`Name: ${studentName}`);
console.log(`Age: ${age}`);
console.log(`Is student: ${isStudent}`);
console.log(`Favorite colors: ${favoriteColors.join(", ")}`);
console.log(`Today's date: ${today.toDateString()}`);

// Exercise 1: Number operations
let a = 10;
let b = 3;
console.log(a + b, a - b, a * b, a / b, a % b, a ** b);

// Exercise 2: String operations
let firstName = "John";
let lastName = "Doe";
let fullName = `${firstName} ${lastName}`;
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(firstName.charAt(0));
console.log(fullName.includes("John"));

// Exercise 3: Comparison & logical
console.log(5 > 3, 5 === 5, 5 == "5", 5 !== 3);
console.log(true && true, true || false, !true);

// Challenge
const birthYear = 1999; // adjust to your own
const msPerDay = 1000 * 60 * 60 * 24;
const ageInMs = Date.now() - new Date(`${birthYear}-01-01`).getTime();
const ageInDays = Math.floor(ageInMs / msPerDay);
const ageInHours = ageInDays * 24;
const yearTurning100 = birthYear + 100;

console.log(`Approx age in days: ${ageInDays}`);
console.log(`Approx age in hours: ${ageInHours}`);
console.log(`Year you turn 100: ${yearTurning100}`);

// Three function styles
function calculateArea(width, height) {
  return width * height;
}

const celsiusToFahrenheit = function (celsius) {
  return (celsius * 9) / 5 + 32;
};

const isEven = (number) => number % 2 === 0;

const getInitials = (fullName) =>
  fullName
    .split(" ")
    .map((word) => word[0].toUpperCase())
    .join("");

const reverseString = (str) => str.split("").reverse().join("");

// Default parameters
function greet(name = "Guest", greeting = "Hello") {
  return `${greeting}, ${name}!`;
}

const calculateTip = (bill, tipPercent = 15) => (bill * tipPercent) / 100;

// Test calls
console.log(calculateArea(5, 3));
console.log(celsiusToFahrenheit(100));
console.log(isEven(7));
console.log(getInitials("John Doe"));
console.log(reverseString("hello"));
console.log(greet());
console.log(greet("Alice"));
console.log(greet("Bob", "Hi"));
console.log(calculateTip(1000));

// If/else
function getGrade(score) {
  if (score >= 90) return "A";
  else if (score >= 80) return "B";
  else if (score >= 70) return "C";
  else if (score >= 60) return "D";
  else return "F";
}

// Switch
function getDayName(dayNumber) {
  switch (dayNumber) {
    case 0: return "Sunday";
    case 1: return "Monday";
    case 2: return "Tuesday";
    case 3: return "Wednesday";
    case 4: return "Thursday";
    case 5: return "Friday";
    case 6: return "Saturday";
    default: return "Invalid day";
  }
}

// 1. Print 1-100
for (let i = 1; i <= 100; i++) console.log(i);

// 2. Even numbers 1-50
for (let i = 2; i <= 50; i += 2) console.log(i);

// 3. FizzBuzz
for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) console.log("FizzBuzz");
  else if (i % 3 === 0) console.log("Fizz");
  else if (i % 5 === 0) console.log("Buzz");
  else console.log(i);
}

// 4. Triangle of stars
for (let i = 1; i <= 5; i++) {
  console.log("*".repeat(i));
}

console.log(getGrade(85), getDayName(3));