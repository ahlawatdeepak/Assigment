const library = {
  books: [
    { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }
  ],

  addBook(book) {
    const { title, author, year } = book;

    if (!title || !author || !year || typeof year !== 'number') {
      console.log("Book information is incomplete or invalid.");
      return;
    }

    this.books.push({ title, author, year });
    console.log(`Book "${title}" added successfully.`);
  },

  findBookByTitle(title) {
    return this.books.find(book => book.title === title);
  },

  removeBook(title) {
    const index = this.books.findIndex(book => book.title === title);

    if (index !== -1) {
      const removed = this.books.splice(index, 1)[0];
      console.log(`Book "${removed.title}" removed.`);
    } else {
      console.log("Book not found.");
    }
  }
};

// Test case: Try adding an incomplete book
library.addBook({ author: "George Orwell", year: 1949 }); // Should log an error

// Check library length after failed add
console.log(`Total books: ${library.books.length}`); // Expected: 1

// Test case: Add a valid book
library.addBook({ title: "1984", author: "George Orwell", year: 1949 });

// Test case: Find the book
const book = library.findBookByTitle("1984");
console.log("Found Book:", book);

// Test case: Remove the book
library.removeBook("1984");

// Final state of books
console.log("Books in library:", library.books);
