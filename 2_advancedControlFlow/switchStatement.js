//Switch Statement

function moveCommand(direction) {
  var whatHappens;

  switch (direction) {
    case "forward":
      whatHappens = "You encounter a monster!";
      break;
    case "back":
      whatHappens = "You have arrived home!";
      break;
    case "forward":
      whatHappens = "You found a river!";
      break;
    case "forward":
      whatHappens = "You run into a troll!";
      break;
    default:
      whatHappens = "Please enter a valid direction";
  }
  return whatHappens;
}


var directionPrompt = prompt("Enter a direction!");
moveCommand(directionPrompt);