function setUser (username){
    this.username = username;
    console.log(this)
}

/***
@description 
* call method used for password current execution context to another function
* we can pass this keyword as a first arg for refer CEC (Current execution context)
@param function().call(this, refer) 
*/



function createUserName (email, password, username){
    this.email = email;
    this.password = password;
    setUser.call(this, username); 
}


const newUser =  new createUserName("parvej@google.com", "fb@123", "parvejdev");
console.log("new Username", newUser)