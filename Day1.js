/*Day 1: Variables and Data Types
// Achievement:
By the end of these activities, you will:
• Know how to declare variables using var, let , and const .
• Understand the different data types in JavaScript.
• Be able to use the typeof operator to identify the data type of a variable.
• Understand the concept of variable reassignment and the immutability of const variables.
*/

// Tasks/Activities:
console.log("Activity1")
// Activity 1: Variable Declaration
// • Task 1: Declare a variable using var, assign it a number, and log the value to the console.
var num1 = 24;
console.log(num1);
// • Task 2: Declare a variable using let , assign it a string, and log the value to the console.
let str1 = "Hello";
console.log(str1);

console.log("Activity2")
// Activity 2: Constant Declaration
// • Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.
const bool1 = true;
console.log(bool1);

console.log("Activity3")
// Activity 3: Data Types
// • Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.
const num2 = 24;
console.log(typeof num2);

const str2 = "Hello";
console.log(typeof str2);

const bool2 = true;
console.log(typeof bool2);

const obj = { username: "Hehe"};
console.log(typeof obj);

const arr = [1, 2, 3];
console.log(typeof arr);

console.log("Activity4")
// Activity 4: Reassigning Variables    
// • Task 5: Declare a variable using let , assign it an initial value, reassign a new value, and log both values to the console.
let num3 = 24;
console.log(num3);
num3 = 25;
console.log(num3);

console.log("Activity5")
// Activity 5: Understanding const
// • Task 6: Try reassigning a variable declared with const and observe the error.
const num4 = 24;
console.log(num4);
// num4 = 25;
// console.log(num4);
// error is : TypeError: Assignment to constant variable.

// Feature Request:
// console.
// 1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the
// console.
let num5 = 24;
let str3 = "Hello";
let bool3 = true;
let obj2 = { username: "Hehe"};
let arr2 = [1, 2, 3];
console.log(num5, typeof num5);
console.log(str3, typeof str3);
console.log(bool3, typeof bool3);
// 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.
let num6 = 24;
const num7 = 24;
console.log(num6, typeof num6);
console.log(num7, typeof num7);
num6 = 25;
num7 = 25;
console.log(num6, typeof num6);
console.log(num7, typeof num7);
