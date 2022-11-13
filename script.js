class user {
  constructor(firstName, lastName, livingCity) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.livingCity = livingCity;
    this.bookToken = [];
  }

  addBook(bookToBorrow) {
    let canBorrowBook = false;
    bookArray.forEach((book) => {
      if (book.bookName == bookToBorrow && book.canBorrow) {
        this.bookToken.push(book);
        canBorrowBook = true;
      }
    });

    if (canBorrowBook == false) {
      console.log("you can't take this book!");
    }
    // alert("you have taken the next book: " + this.bookToken);
  }
}

// console.log(user1);

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
          " borrows this books: "
      );
      element.bookToken.forEach((book) => {
        console.log(`${book.bookName} written by ${book.authorName}`);
      });
    });
  }
}

class Book {
  constructor(bookName, authorName, canBorrow) {
    this.bookName = bookName;
    this.authorName = authorName;
    this.canBorrow = canBorrow;
  }
}

let book1 = new Book("book1", "author1", true);
let book2 = new Book("book2", "author2", true);
let book3 = new Book("book3", "author3", false);
let book4 = new Book("book4", "author4", true);
let bookArray = [book1, book2, book3, book4];

let user1 = new user("gil", "shterman", "petahTikva");
let user2 = new user("ben", "cohen", "natanya");
let user3 = new user("ayala", "sholman", "modiein");
user1.addBook("book1");
user2.addBook("book1");
user2.addBook("book2");
user3.addBook("book3");
user1.addBook("book3");
user2.addBook("book7");

let a = new bookReport("report");
a.addNewUser(user1);
a.addNewUser(user2);
a.addNewUser(user3);
// console.log(a);
a.printReport();
