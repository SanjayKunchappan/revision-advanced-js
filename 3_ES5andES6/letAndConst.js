//let and const
//new way of declaring variables

const player = 'Bobby';
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
    let wizardLevel= true; 
    //this variable is only accessible inside the if statement
    //for var variables, scope is the root scope unless it is inside a function
    //everytime it is wrapped around a curly bracket, it creates a new scope
    console.log('inside for let',wizardLevel);
}
console.log('outside for let',wizardLevel);


var isWizard = false;

if (experience > 90) {
    var isWizard= true; 
    console.log('inside for var',isWizard);//true
}
console.log('outside for var',isWizard);//true


const obj = {
    player: 'bobby',
    experience: '100',
    isWizard: false,
}

obj = 5; // this would return an error since obj is a constant

obj.isWizard=true; //the value actually changes to true
//we can change the properties of constant objects.

obj.isPowerful=true;
//we can also add in more properties to the constant variable object