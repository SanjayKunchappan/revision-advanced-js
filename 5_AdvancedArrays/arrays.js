var listOfAnimals = ["tiger", "cat","bird"];
console.log(listOfAnimals[1]);

var numbers = [1,2,3,4,5,6];

var booleans = [true, false, true, true];

var functionsList = [function apples(){console.log("apples")}, function oranges(){console.log("oranges")} ];

var mixedList = ["apples", 3, undefined, true]; //this is not recommended
//as it causes performance issues
//better to use arrays with single data type


//arrays within arrays
var list = [
    ["tiger", "cat", "bear", "dog"],
    ["swan", "eagle", "duck"]
];
list [1][0]; // this would return swan
list [0][3]; //this would return dog


//Javascript has predefined functions for arrays

var list = ["tiger", "cat", "bear", "bird"];


list.shift();// this would return tiger and remove it from the array.
//new array would be ["cat","bear","bird"].





list.pop();// this returns bird and removes it from the array.
//new array would be ["cat", "bear"].

list.push("elephant");//this will add elephant at the back of array and return length of array
// ["cat", "bear", "elephant"] will be new array.
//nothing happens and just array length is returned when push is called without arguments.

list.concat(["bee", "deer"]); // adds this array at the end of the list array.
//and returns the updated list array. (list is the name of the array we are using)

//The returned output is:
// (5) ['cat', 'bear', 'elephant', 'bee', 'deer']
// 0: "cat"
// 1: "bear"
// 2: "elephant"
// 3: "bee"
// 4: "deer"
// length: 5

//but outputting list, we can see that the concatenated values are missing from the array
//this is because we didn't save it. 

var newList = list.concat(["lion"]);
//here newList would have 4 elements
//and list would have the original 3 elements

//sorts the array
list.sort();
//array after sorting
////['bear', 'cat', 'elephant', 'lion']


list.unshift("Koala");// adds new element to beginning of array and returns array length
//the new array is
//['Koala', 'bear', 'cat', 'elephant', 'lion']
