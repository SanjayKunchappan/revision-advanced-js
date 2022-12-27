//advanced arrays

const array = [1,2,3,4,5];
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