// promise creation , holding in a variable is not mandatory 
// promise is an object
const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
       console.log("async task is completed")
       resolve() // to connect then with resolve 
    }, 2000)
})

promiseOne.then(function(){  // then is for resolve 
    console.log("promise consumed")
})

// another way of creating promise 
new Promise(function(resolve, reject){
    setTimeout(function(){
       console.log("async task 2")
       resolve() // to connect then with resolve 
    }, 2000)
}).then(function(){
    console.log("task 2 resolved")
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username : "pinki" , email : "pinki@example.com"}) // can pass parameters here like oject, array
    }, 2000)
 })
    

promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve, reject){
      setTimeout(function(){
        let error = true ; 
        if(!error){
          resolve({username: "pinki" , password : "123"})  // if error is false this will be executed
        }
        else{
            reject('Error : something went wrong') // if error is true it will be executed 
        }
      }, 2000)
})

 promiseFour.then(function(user2){ // can also use arrrow function 
     console.log(user2)
     return user2.username    // this returned value is going in second .then
 }).then(function(username){
     console.log(username)
 }).catch(function(error){
    console.log(error)
 }).finally(function(){  // it will run in any case by default to know final state
    console.log("the promise is either resolved or rejected")
 })

 //promise not only done by .then .catach can also be done by async wait
  const promiseFive = new Promise(function(resolve ,reject){
        setTimeout(function(){
        let error = true ; 
        if(!error){
          resolve({username: "javascript" , password : "123"})  // if error is false this will be executed
        }
        else{
            reject('javascript went wrong') // if error is true it will be executed 
        }
      }, 2000)
  })
   //async wait : doesnt handle error gracefully
  async function consumePromiseFive(){
     const response = await promiseFive
     console.log(response);
   }

   consumePromiseFive()

//  try catch handle error properly
async function consumePromiseWithTryNCatch(){
    try{
      const response = await promiseFive
      console.log(response);
    } catch(error){
        console.log(error);
    }
}

consumePromiseWithTryNCatch()
// response type of fetch is promise so we can use .then and .catch with fetch