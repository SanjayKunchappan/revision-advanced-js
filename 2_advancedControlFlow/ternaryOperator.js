function isUserValid(bool) {
   return bool; 
}// returns whatever boolean value is given to it

var answer = isUserValid(true) ? "You may enter" : "Access Denied!";
//ternary operator
// condition ? "If true run this expression" : "if false do this" ;

var automatedAnswer = 
"Your account # is " + (isUserValid(false)? "12345" : "not available");