console.log("************** DELIVERABLE 04 *********************");

// 4. Read books

const books = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

const isBookRead = (books, titleToSearch) => {
  const foundBook = books.find((book) => book.title === titleToSearch);
  if (!foundBook) {
    return false;
  }
  const isRead = foundBook.isRead ? true : false;
  return isRead;
};

console.log(isBookRead(books, "Devastación"));
console.log(isBookRead(books, "Canción de hielo y fuego"));
console.log(isBookRead(books, "Los Pilares de la Tierra"));
