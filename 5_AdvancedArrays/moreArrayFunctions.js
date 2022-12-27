
//arrayName.every(functionName)
//checks every element of an array for a test
let marvelHeroes = ["Ironman", "Spider-man", "Thor", "Hulk", "Halk-eye"];

marvelHeroes.every(nameLengthCheck)

function nameLengthCheck(name) {
    return  name.length >4;
}
//this will return False, since all elements don't fulfill the criteria
//however if we put name.length>3, this returns True.


//filter - this returns a new array that passes a test
marvelHeroes = ["Ironman", "Spider-man", "Thor", "Hulk", "Halk-eye"];

marvelHeroes.filter(strongAvengerCheck);

function strongAvengerCheck(name) {
    return  name.length ===4;
}
//returns an array consisting of thor and hulk
//we can save it in a variable by using
// let strongMarvelHeroes = marvelHeroes.filter(strongAvengerCheck)
let strongMarvelHeroes=marvelHeroes.filter(strongAvengerCheck);


//forEach function
strongMarvelHeroes.forEach(alert);

//from function - this creates an array from an object
let randText= "Hi World";
const arrFromText= Array.from(randText);
//arrFromText will be:
// (8) ['H', 'i', ' ', 'W', 'o', 'r', 'l', 'd']
// 0: "H"
// 1: "i"
// 2: " "
// 3: "W"
// 4: "o"
// 5: "r"
// 6: "l"
// 7: "d"
// length: 8