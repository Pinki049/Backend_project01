class User{
    constructor(name , code){
        this.name = name
        this.code = code
    }
        get password(){
            return this.code.toUpperCase()
        }

        set password(value){
            this.code = value
        }
}
 
const pinki = new User("pinki" ,"abcd")
console.log(pinki.password)