class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`this is username ${this.username}`);
  }
}



/***
 * @description () how to inheritance from user to other property
 */


class Teacher extends User{
    constructor(email, username, password){
        super(username)
        this.email = email;
        this.password = password
    }

   addCourse(){
    console.log(`${this.username} add new course `);
   }
}


const Prem = new Teacher("param", "param@gmail.com", "123");


console.log(Prem);

Prem.addCourse()