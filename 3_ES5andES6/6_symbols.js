//Symbol Datatype

let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

// sym2 === sym3 is false

//symbols are used because they create this completely unique type
//to make sure there is never going to be conflict

//symbol used as an identifier for object properties