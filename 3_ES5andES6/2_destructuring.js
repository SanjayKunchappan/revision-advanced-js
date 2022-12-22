const obj = {
    player:'bobby',
    experience: 100,
    isWizard:false
}

//old way
const player1= obj.player;
let experience1 = obj.experience;
let isWizard1 = obj.isWizard;

//after destructuring, we can simplify the above 3 lines as:
const { player } = obj;
let { experience, isWizard } = obj;
//variable names have to be same name as obj properties for this to work