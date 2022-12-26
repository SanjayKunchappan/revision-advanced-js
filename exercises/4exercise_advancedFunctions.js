//Solve these problems:

//#1 Create a one line function that adds adds two parameters

//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3)
// output: 13


//Currying: What does the last line return?
const sum1 = (a, b) => a + b
const curriedSum1 = (a) => (b) => a + b
curriedSum1(30)(1)
// 31

//Currying: What does the last line return?
const sum2 = (a, b) => a + b
const curriedSum2 = (a) => (b) => a + b
const addFive = curriedSum2(5)
addFive(12)
//17

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10) //add1 f, add5 g, 10 a
//16

//What are the two elements of a pure function?
// Element 1 is having no side-effects. e.g. - not altering outside variables
// Element 2 is that the function should be DETERMINISTIC 
//(give same output for same input no matter how many times we run the function)
