//making functions, method 1
//function name() {}

//function declaration

function sayHello () {
    console.log ("Hello");
}

sayHello(); // calling the function

//second way is function expression
//var a = function name() {}

var sayBye = function() { //anonymous function.. doesn't have a name. the function can't be accessed without the variable.
    console.log("Bye");
}
sayBye();


//parameters and arguments

function addition(a,b) {
    sum = a+b;
    return sum;
}

addition(2,3);


//when return statement is encountered, this exits the function

function multiply (a,b) {
    if(a>10 || b>10) {
        return "That's too hard!";
    } else {
        return a*b;
    }
}

multiply (5,10);


