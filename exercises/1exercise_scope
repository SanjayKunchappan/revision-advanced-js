
// For all of these, what is the value of a when the function gets called with the alert()
// #1
function q1() {
    var a = 5; //scope within the function
    if(a > 1) {
        a = 3;
    }
    alert(a); // a should be 3
}

//#2
var a = 0; // root
function q2() {
    a = 5; //if q2 is called then a will become 5
}

function q22() {
    alert(a); // a should be 0 since, it was declared as 0 and hasnt been changed yet
}// if q2() is run and then q22(), then value will be 5 and not 0


//#3
function q3() {
    window.a = "hello"; // will set the a inside window object to hello 
}


function q32() {
    alert(a);//will display whatever the global value is
}// will be hello, if q32 is run after q3

//#4
var a = 1; // changes global a to 1
function q4() {
    var a = "test"; // new var a with scope within function
    alert(a);//this a will show test
}

//#5
var a = 2;
if (true) {
    var a = 5;
    alert(a);//5
}
alert(a);//5

//only function scopes are treated differently
