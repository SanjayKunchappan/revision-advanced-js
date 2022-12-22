//dynamic object properties
const field1 = 'Full Name';

const obj = {
    [field1]: 'Khushi Singh',
    ['ray'+'smith']: 'hihi',
    [1+2]: 'hello'
}
//obj will be
//{3: 'hello', Full Name: 'Khushi Singh', raysmith: 'hihi'}


const a = "Sanjay";
const b = true;
const c = {};

//old way
const obj2 = {
    a:a,
    b:b,
    c:c
}

//new way
const obj3 = {
    a,b,c
}