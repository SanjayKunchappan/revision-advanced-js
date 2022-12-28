//advanced arrays

const array = [1,2,3,4,5];
console.log("Original Array: ",array);
const doubleArray = [];
//we can do for loops with them


//FOR EACH LOOP
//we can do .forEach loops with them, new in ES5
const newArray = array.forEach ((num)=>{
   doubleArray.push(num *2);
})
console.log('forEach simple: ',newArray);// this returns undefined
// and the for each loop just multiplies each element by 2
//we are not changing the array or saving it anywhere
//hence we have to use another array and push the doubled values
console.log('forEach push into new array gives out: ',doubleArray); 


//map, filter and reduce - imp array methods
//super useful for array loops
//all 3 are pure, whatever input we give, always return same output and have no side-effects

// ARRAY MAP
//in .map() method, 
//we always have to return something
//what we return will get appended into the new array 
//where we are assigning the map() function.

const mapArray = array.map((num)=> {
    return num * 5;
});
console.log('array.map() gives out :',mapArray); //returns an array with num*5
//.map function  - action performed on each element of array
// and each returned value is saved into the variable we store the arr.map() function into



//Difference between forEach() and map()
//whenever we need to do simple loop and do some action on an array
//preferred should be map() over forEach()

// for forEach(), the operation may do nothing, we can leave completely blank or console log
// all forEach() cares about is iterate over each element
// and apply whatever operation we tell it to, to each element


//whereas, map() has a restriction on the operation
//it expects the operation to return an element
// map() iterates over a collection of elements, applying the operation on each element
// and finally storing the result of each invocation into the new array

//map() transforms the array

//forEach() : with forEach we can have  a lot of side-effects and doesnot return anything
//whereas with 
//map(): it returns a value and doesn't have side-effects
//we are not mutating the data of the original array but saving onto new array


//simplifying array map return ->
// since we have only one parameter, no bracket is needed
//and since we are returning a single line we can remove curly brackets as well
const simpleMapArray = array.map(num=> num * 5);
console.log(' simplified array.map() gives out :',simpleMapArray); 


//FILTER()
// also needs to return

const filterArray = array.filter(num => {
    return num>2; // we can put any condition in here
});
console.log("filter1: ",filterArray);

const simpleFilterArray = array.filter(num => num>2);// we can put any condition in here
console.log("filter2: ",simpleFilterArray);



//REDUCE()
//very powerful method , we can do both map and filter with this

const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num ;
},0);//this zero means starting value of accumulator is 0
console.log("reduce: ",reduceArray);
//accumulator is something where we store the information that happens in the body of the function