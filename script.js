class user {
  constructor(firstName, lastName, livingCity) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.livingCity = livingCity;
    this.bookToken = [];
  }

  addBook(tokenBook) {
    this.bookToken.push(tokenBook);
    // alert("you have taken the next book: " + this.bookToken);
  }
}

let user1 = new user("gil", "shterman", "petahTikva");

user1.addBook("herryPoter");
let user2 = new user("ben", "cohen", "natanya");
let user3 = new user("ayala", "sholman", "modiein");
user2.addBook("book1");
user2.addBook("book2");
user3.addBook("book3");
user1.addBook("book3");
console.log(user1);

class bookReport {
  constructor(name) {
    this.name = name;
    this.allUsers = [];
  }
  addNewUser(user) {
    this.allUsers.push(user);
  }
  printReport() {
    this.allUsers.forEach((element) => {
      console.log(
        element.firstName +
          " " +
          element.lastName +
          " from " +
          element.livingCity +
          " borrows this books: " +
          element.bookToken
      );
    });
  }
}

let a = new bookReport("report");
a.addNewUser(user1);
a.addNewUser(user2);
a.addNewUser(user3);
console.log(a);
a.printReport();
