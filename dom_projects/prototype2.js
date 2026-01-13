// added properties to object to access object and arrays directly

const heroes = ["thor","batmen"]

let heroPower = {
    thor : "xyz",
    batmen : "wxy"
}
// when power is given to object it is by deafault given to array, string , object , fucntion 
Object.prototype.pinki = function(){
    console.log(`pinki is everywhere`);
}

heroes.pinki()  // accessing array directly through function pinki()
heroPower.pinki()

Array.prototype.rohit = function(){
    console.log(`rohit is here checking for array`)
}

heroes.rohit();
//heroPower.rohit(); // when power given to array it can't be given to objects

// prototypal inheritance
let Teacher = {
    name : "rohit",
    age : 25,
}

let student = {
    class :"fifth",
    gender : "female"
}

Object.setPrototypeOf(student,Teacher)

// giving a new property trueLength to find the exact length of string without using trim()

let username = "pinki        "

String.prototype.trueLength = function(){
    console.log(`${this}`)  // giving pinki becz in username we have only reference of pinki
    console.log(`${this.name}`);   // giving undefined
    console.log(`true length is : ${this.trim().length}`)
}

username.trueLength()
"ram".trueLength()  // this will give context of ram