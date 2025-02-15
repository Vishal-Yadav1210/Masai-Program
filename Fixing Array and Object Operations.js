const library = {
    books: [{ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }],
  
    addBook(book) {
      // Validate book object
      if (!book.title || !book.author || !book.year) {
        console.log("Book information is incomplete. Please provide title, author, and year.");
        return;
      }
  
      // Check for duplicate books
      const isDuplicate = this.books.some(
        (b) => b.title === book.title && b.author === book.author && b.year === book.year
      );
  
      if (isDuplicate) {
        console.log(`Book "${book.title}" by ${book.author} (${book.year}) already exists in the library.`);
        return;
      }
  
      // Add the book if valid and not a duplicate
      this.books.push(book);
      console.log(`Book "${book.title}" by ${book.author} (${book.year}) added successfully.`);
    },
  
    findBookByTitle(title) {
      const book = this.books.find((book) => book.title === title);
      if (book) {
        console.log(`Book found: "${book.title}" by ${book.author} (${book.year}).`);
      } else {
        console.log(`Book with title "${title}" not found.`);
      }
      return book;
    },
  
    removeBook(title) {
      const index = this.books.findIndex((book) => book.title === title);
      if (index !== -1) {
        const removedBook = this.books.splice(index, 1)[0];
        console.log(`Book "${removedBook.title}" by ${removedBook.author} (${removedBook.year}) removed successfully.`);
      } else {
        console.log(`Book with title "${title}" not found.`);
      }
    },
  };
  
  // Test cases
  library.addBook({ author: "George Orwell", year: 1949 }); // Incomplete book info
  library.addBook({ title: "1984", author: "George Orwell", year: 1949 }); // Valid book
  library.addBook({ title: "1984", author: "George Orwell", year: 1949 }); // Duplicate book
  library.findBookByTitle("1984"); // Find existing book
  library.findBookByTitle("Animal Farm"); // Find non-existent book
  library.removeBook("1984"); // Remove existing book
  library.removeBook("Animal Farm"); // Remove non-existent book