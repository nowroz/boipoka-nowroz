import Book from "../book/Book";

const Books = ({ books }) => {
  return (
    <section className="my-18">
      <h2 className="font-playfair-display text-4xl font-bold text-[#131313] text-center mb-8">
        Books
      </h2>
      <div className="grid grid-cols-3 gap-6">
        {books.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </section>
  );
};

export default Books;
