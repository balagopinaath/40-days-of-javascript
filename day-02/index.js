console.log("Day 2 of 40 days of JavaScript");

// ✅ Task 1: Declare variables for a person’s name, age, isStudent status, and favorite programming language.
// ✅ Task 2: Print the values to the console.
// ✅ Task 3: Try reassigning values to let and const variables and observe errors.
// ✅ Task 4: Create an object and an array, assign them to new variables, modify, and observe changes.


// ✅ Task 1

let name = "Bala"
let age = 29
const isStudent = false
let favProgrammingLang = "JavaScript"

// ✅ Task 2

console.log(`Task 2: The person's name is ${name}, age is ${age}, isStudent status is ${isStudent}, and favorite programming language is ${favProgrammingLang}.`);

// ✅ Task 3

name = "Bala Gopinaath"
console.log(name);

// ✅ Task 4

let person = {
    name: "Bala",
    age: 29,
    isDeveloper: true,
    favProgrammingLang: "JavaScript"
}


let personCopy = person
personCopy.name = "Bala Gopinath"
let languages = ["JavaScript", "Python", "Java"]

personCopy.languages = languages

console.log(personCopy);
