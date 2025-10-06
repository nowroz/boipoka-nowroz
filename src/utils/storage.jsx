import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

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
    MySwal.fire({
      title: "Slow Down!",
      text: "This book is already marked as read.",
      icon: "info",
    });
    return;
  }

  readBooks.push(bookId);

  localStorage.setItem(key, JSON.stringify(readBooks));
};

export { getReadBooksFromLocalStorage, addReadBookToLocalStorage };
