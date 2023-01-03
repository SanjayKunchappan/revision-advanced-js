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
const retailCompanies1 = companies.filter(function(company){
    if (company.category==="Retail"){
        return true;
    }
});
console.log(retailCompanies1); //retailCompanies is filtered array containing companies whose category is retail

//same code in one line
//filter retail companies
const retailCompanies = companies.filter(company=>company.category==="Retail");
console.log(retailCompanies); //retailCompanies is filtered array containing companies whose category is retail

//get 80s companies
const eightiesCompaniesLong = companies.filter(
    function(company){
        if(company.start<1990&&company.start>=1980) {
            return true;
        }
    }
);
console.log(eightiesCompaniesLong);

const eightiesCompaniesShort = companies.filter(company=>company.start<1990&&company.start>=1980);
console.log(eightiesCompaniesShort);


//get companies that lasted more than 10 years
const companiesLastingTenYears = companies.filter(company=>company.end-company.start>=10);
console.log("Companies Lasting more than 10 years", companiesLastingTenYears);


//map
//===
//instead of filtering things out, we can create new arrays from the current array based on given criteria


//create array of company names

const companyNames = companies.map(function(company){
    return company.name;
});

console.log(companyNames);

const testMap = companies.map(function(company){
    return `${company.name} [${company.start} - ${company.end}]`;
});
console.log(testMap);
// this would have an array of elements in the format Company One [1980 - 1983]

//in shorthand, 
const ShortTestMap = companies.map(company => `${company.name} [${company.start} - ${company.end}] (${company.category})`);
console.log(ShortTestMap);

//squareroot all ages
const agesSquare = ages.map (age => Math.sqrt(age));
console.log(agesSquare);
//ages * 2
const agesTimesTwo = ages.map (age => age*2);
console.log(agesTimesTwo);
//applying 2 maps one after another

const agesMinusFiveDoubled = ages
    .map(age=>age-5)
    .map(age=>age*2);
//first -5 then multiplied by two
console.log(agesMinusFiveDoubled);


//sort
//====

//reduce
//======