const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989},
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//forEach 
//=======
// - better way to loop through an array than a for loop 
// - doesn't return anything like these other ones but it is a nice and elegant way to loop through data

//first using a normal for loop
for  (let i=0; i<companies.length; i++) {
    console.log(`element ${i}: `,companies[i]);
}

//forEach
companies.forEach((company)=>{
    console.log(company);
});



//filter
//======
// - filter allows us to filter things out from the array

//using for loop
let canDrink = [];
for (let i=0; i<ages.length; i++) {
    if (ages[i]>= 21) {
        canDrink.push(ages[i]);
    }
}
console.log (canDrink);


//same thing with filter()
const canVote = ages.filter( function(age) {
    if(age >=21) {
        return true;
    }
}); 
console.log(canVote);


//same using arrow function
const canDrive = ages.filter( age => age > 18 ); // ages.filter((age)=> {return age>18});
console.log(canDrive);

//filter retail companies
const retailCompanies = companies.filter(company=>company.category==="Retail");
console.log(retailCompanies); //retailCompanies is filtered array containing companies whose category is retail



//map
//===

//sort
//====

//reduce
//======