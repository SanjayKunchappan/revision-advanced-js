// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
let forEachArray = [];
const forEachFunction = array.forEach((element)=>{
  let {username} = element; 
  username = username + '!'
  forEachArray.push(username);
});
console.log(array);
console.log(forEachArray);


//Create an array using map that has all the usernames with a "?" to each of the usernames

const mapArray = array.map((element)=>{
  let {username} = element;
  return username + "?";
});
console.log(array);
console.log(mapArray);


//Filter the array to only include users who are on team: red

const filterArray = array.filter(element=>element.team==='red');
console.log(filterArray);

//Find out the total score of all users using reduce

const reduceArray2 = array.reduce((total, element)=>total + element.score,0);
console.log(reduceArray2);





// (1), what is the value of i? INDEX OF THE ARRAY
// (2), Make this map function pure:

//Pure - deterministic and no side effects
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray2 = arrayNum.map(num => num * 2);
console.log(newArray2);

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.

const bonus = array.map((element)=>{
  element.items = element.items.map((item)=>item + "!");
  return element;
});

console.log(bonus);