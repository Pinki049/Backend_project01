class User{
    constructor(name,email,code){
        this.name = name
        this.email = email
        this.code = code
    }
    encrytPassword(){
       return `${this.code}abc`
    }
}

const calling = new User("pinki","abc@123","123")
console.log(calling.encrytPassword());

class Teacher extends User{
    constructor(name, email,code){
        super(name)
        this.email = email 
        this.code = code
    }

    addName(){
        console.log(`add name : ${this.name}`)
    }

    static stopAccess(){
        return `123`
    }
}

const calling2 = new Teacher("rohit","rohit123","456")
console.log(calling2)
console.log(calling2.stopAccess())

// by making a function static we can prevent its access outside 