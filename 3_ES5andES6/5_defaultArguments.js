//default arguments

function greet(name='', age=28, pet='cat') {
    return `Hello ${name}, you seem to be ${age-10}! What a beautiful ${pet} you have!`;
}

greet(); //this would also work with default values
//'Hello , you seem to be 18! What a beautiful cat you have!'

greet("Sanjay");
//'Hello Sanjay, you seem to be 18! What a beautiful cat you have!'

greet("Sanjay",25, "dog");
//'Hello Sanjay, you seem to be 15! What a beautiful dog you have!'