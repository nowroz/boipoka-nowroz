import ReadBook from "../readBook/ReadBook";

const ReadBooksList = ({ books, readBooks }) => {
  const onlyReadBooks = books.filter((book) => readBooks.includes(book.bookId));

  return (
    <div className="my-14 flex flex-col gap-8">
      {onlyReadBooks.map((readBook) => (
        <ReadBook key={readBook.bookId} readBook={readBook}></ReadBook>
      ))}
    </div>
  );
};

export default ReadBooksList;
