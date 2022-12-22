// change everything below to the newer Javascript!

// let + const
// var a1 = 'test';
// var b1 = true;
// var c1 = 789;
// a1 = 'test2';
//Solution
let a2 = 'test';
const b2 = true;
const c2 = 789;
a2 = 'test2';


// Destructuring
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};
// var firstName = person.firstName;
// var lastName = person.lastName;
// var age = person.age;
// var eyeColor = person.eyeColor;
//Solution
const { firstName, lastName, age, eyeColor } = person;


// Object properties
var a = 'test';
var b = true;
var c = 789;
// var okObj = {
//   a: a,
//   b: b,
//   c: c
// };
//Solution
const okObj = { a, b, c };


// Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";
//Solution
const msg = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no???`;

// default arguments
// default age to 10;
// function isValidAge(age) {
//     return age
// }
const isValidAge = (age=10) => age;


// Symbol
// Create a symbol: "This is my first Symbol"
const sym = Symbol("This is my first Symbol");
// Arrow functions
// function whereAmI(username, location) {
//     if (username && location) {
//         return "I am not lost";
//     } else {
//         return "I am totally lost!";
//     }
// }
//Solution
const whereAmI = (username, location) => {
    if (username && location) {
        return `I am not lost`;
    } else {
        return `I am totally lost!`;
    }
}