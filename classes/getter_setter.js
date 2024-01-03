class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email;
  }

  set email(value) {
    this._email = value;
  }

  get password() {
    return this._password;
  }

  set password(value) {
    this._password = `value12132332`; /*** @explain we can hide and encapsule value  */
  }
}

const Teacher = new User("parvej", "parvej@gmail.com", "123");
console.log(Teacher.email);

console.log(Teacher.password);
