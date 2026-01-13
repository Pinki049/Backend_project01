// creating object
const user = {
    username : "pinki" ,
    isLoggedIn : true ,
    count : 8 ,

    getUserDetails: function(){
        console.log("got user deatials from database");
        console.log(`username : ${this.username}`);
    }
}
 console.log(user.getUserDetails());

 function User(username, count, isLoggedIn){
    this.username = username;    // this is used with variable not the parameter for current context
    this.count = count;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`welcome: ${this.username}`)
    }

     return this  // optional to use
 }
// new keyword creates a diff copy each time so that the changes we are doing is to us only and didnt change the original one , so a constructor function is being called
 const userOne = new User("pinki",9,true) // new keyword is used to avoid overwrite while making userTwo
 const userTwo = new User("rohit",10,false) 
 console.log(userOne);
 console.log(userTwo);

