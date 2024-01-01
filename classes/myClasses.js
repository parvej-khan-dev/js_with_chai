

/***
 * @class 
 * @description 
 * 
 */

// class User{
//     constructor(username, email,password){
//         this.username = username;
//         this.email= email;
//         this.password = password;
//     }


//     encryptPassword(){
//         console.log(`dsfkjsdklf${this.password}dslkfjelwjfsd;kjsd`);
//     }

//     changeUserName(){
//         console.log(`${this.username.toUpperCase()}`)
//     }

// }

// const parvej = new User("parvej", "parvej@gmail.com", "123");

// parvej.encryptPassword()
// parvej.changeUserName()


// behind the scene 

function User (username , email, password){
this.username = username;
this.password = password;
this.email = email;
}


User.prototype.encryptPassword = function(){
    console.log(`dsfkjsdklf${this.password}dslkfjelwjfsd;kjsd`);

}

User.prototype.changeUserName = function(){
    console.log(`${this.username.toUpperCase()}`)

}

const aman = new User('aman', 'aman@gmail.com', "123")



aman.changeUserName()
aman.encryptPassword()