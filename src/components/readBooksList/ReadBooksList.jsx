import ReadBook from "../readBook/ReadBook";

const ReadBooksList = ({ books, readBooks, sortType }) => {
  const onlyReadBooks = books.filter((book) => readBooks.includes(book.bookId));

  const sortReadBooks = () => {
    switch (sortType) {
      case "Rating":
        return onlyReadBooks.sort((a, b) => a.rating - b.rating);
      case "Pages":
        return onlyReadBooks.sort((a, b) => a.totalPages - b.totalPages);
      case "Published Year":
        return onlyReadBooks.sort(
          (a, b) => a.yearOfPublishing - b.yearOfPublishing,
        );
      default:
        return onlyReadBooks;
    }
  };

  const sortedReadBooks = sortReadBooks();

  return (
    <div className="my-14 flex flex-col gap-8">
      {sortedReadBooks.map((readBook) => (
        <ReadBook key={readBook.bookId} readBook={readBook}></ReadBook>
      ))}
    </div>
  );
};

export default ReadBooksList;
