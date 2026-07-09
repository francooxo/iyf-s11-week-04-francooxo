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