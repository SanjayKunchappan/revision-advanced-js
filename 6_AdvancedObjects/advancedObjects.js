//advanced objects concepts
//=========================


//reference type
//==============


[] === [] //false

[1] === [1] //false

var object1 = { value:10 };
var object2 = object1;
var object3 = { value:10 };


object1 === object2 //true

object1 === object3 //false

object1.value=15;
object2.value; //15
object3.value; //10


//context
//=======


//instantiation
//=============