// function first() {
//     var greet = "Hi";
//     function second() {
//         alert(greet);
//     }
//     return second;
// }

// var newFunc = first();
// newFunc();



const first = () => {
    const greet = "Hi";// exists within first

    const second = () => {//children can access parent scope
 //       const child = 'abc';
        alert(greet);
    }
 //   alert(child);// this will cause an error as parent doesnt have access to child scope
    return second;
}

const newFunc = first();
newFunc(); 

//SCOPE - variables created inside of functions including their parameters are local to the functions.
// every time run first function the greet variable is created fresh every time... to prevent accidental interferences 


//CLOSURES - a function ran, the function executed, it's never going to execute again
// but, it's going to remember that there are references to this variable inside this function
//so the child scope always has access to the parent scope



//CURRYING is the process of converting a function that takes in multiple arguments
//into a function that takes them one at a time

const multiply = (a,b) => a*b;

const curriedMultiply = (a) => (b) => a*b;

curriedMultiply(3);// this returns (b) = a*b
//this returned a function since it is a function inside a function  
// and browser doesnt know the value of parameter b.

//if we run curriedMultiply(3)(4) we would get the output of a*b
curriedMultiply(3)(4);//12

// why do we need this
const multiplyBy5 = curriedMultiply(5);
multiplyBy5(12);//60
//we extended the functionality by currying


//COMPOSE - the act of putting 2 functions together to form a 3rd function
// where the output of one function is the input of the other

const compose = (f,g) => (a) => f(g(a));
const sum = (num) => num+1;
compose(sum, sum)(5);



//compose(sum, sum)(5);// in this, f & g are sum and a is 5
// const compose = (f,g) => (5) => f(g(5));
// now calculating g(5) and g is sum
// so essentially, g(5) is 5+1 i.e 6
// const compose = (f,g) => (5) => f(g(5));
// const compose = (f,g) => (5) => f(6);
// and f(6) is actually sum(6) which is 6+1 i.e 7
// answer is 7



// avoiding Side-effects and Functional Impurity

// like reading or writing external variables or console logs
// are all side-effects
// it is good practice to avoid side-effects


//functional purity
// it is good practice to avoid side-effects
// and we always want a "return"

// by always returning something and avoiding side-effects
// we create something called DETERMINISTIC
// no matter what, if we give same inputs we get same output every time
// and we won't get random errors here and there