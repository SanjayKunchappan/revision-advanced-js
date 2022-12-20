//root scope (window)

var fun = 5;

function funFunction(){
    //child scope
    var fun = "Bye";
    console.log(1, fun);
}

function funerFunction(){
    //child scope
    var fun = "Hi";
    console.log(2, fun);
}

function funestFunction(){
    //child scope
    fun = "Hehe";
    console.log(3, fun);
}


console.log("window",fun);
funFunction();
funerFunction();
funestFunction();
console.log("window after funest",fun);