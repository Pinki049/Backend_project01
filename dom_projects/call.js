function setUsername(name){
    this.name = name 
    console.log("called")
}

function createUser(name,email,code){
    setUsername.call(this,name) //.call is used to take reference from external function
    this.email = email
    this.code = code
}

const callFunct = new createUser("pinki" ,"p@123", "123")
console.log(callFunct)