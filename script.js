class user {
  #firstName;
  #lastName;
  #livingCity;
  constructor(firstName, lastName, livingCity) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#livingCity = livingCity;
    this.bookToken = [];
  }

  addBook(tokenBook) {
    this.bookToken.push(tokenBook);
    alert("you have taken the next book: " + this.bookToken);
  }
}

let newUser = new user();
newUser.addBook("herryPoter");
