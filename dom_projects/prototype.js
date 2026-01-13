function multiply(num){
   return num*5
}

multiply.power = 2   // function can aslo behave as object 
console.log(multiply(4));
console.log(multiply.power);
console.log(multiply.prototype);

function createUser(name,score){
    this.name = name
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
    this.name = "changed"
}
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
    console.log(` name is ${this.name}`);
}

const first = new createUser("pinki", 24)
const second = new createUser("rohti" , 20)

first.increment()
first.printMe()