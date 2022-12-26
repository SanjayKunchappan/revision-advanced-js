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

//scope - variables created inside of functions including their parameters are local to the functions.
// every time run first function the greet variable is created fresh every time... to prevent accidental interferences 


//Closures - a function ran, the function executed, it's never going to execute again
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