class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`this is username ${this.username}`);
  }

  static createId() {
    this._id = Math.floor(Math.random() * 10);
    return this._id;
  }

}


const Parvej  = new User("parvejkhan");
console.log(Parvej)