const key = "readBooks";

const getReadBooksFromLocalStorage = () => {
  const serializedData = localStorage.getItem(key);

  if (serializedData) {
    let readBooks = JSON.parse(serializedData);

    return readBooks;
  } else {
    return [];
  }
};

const addReadBookToLocalStorage = (bookId) => {
  const readBooks = getReadBooksFromLocalStorage();

  if (readBooks.includes(bookId)) {
    alert("This book is already added as read!");
    return;
  }

  readBooks.push(bookId);

  localStorage.setItem(key, JSON.stringify(readBooks));
};

export { getReadBooksFromLocalStorage, addReadBookToLocalStorage };
