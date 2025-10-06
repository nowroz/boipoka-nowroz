import { useLoaderData, useParams } from "react-router";
import { addReadBookToLocalStorage as addReadBook } from "../../utils/storage";

const BookDetails = () => {
  const { bookId } = useParams();
  const books = useLoaderData();

  const book = books.find((book) => book.bookId === parseInt(bookId));

  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  const handleMarkAsReadButtonClick = (bookId) => {
    addReadBook(parseInt(bookId));
  };

  return (
    <main className="container mx-auto px-4">
      <section className="flex justify-between items-center gap-12">
        <div className="w-1/2 p-20 bg-[#1313130d] rounded-2xl">
          <img src={image} alt="" />
        </div>
        <div className="w-1/2">
          <h2 className="font-playfair-display text-4xl font-bold text-[#131313] mb-4">
            {bookName}
          </h2>
          <h3 className="font-work-sans text-xl font-medium text-[#131313cc] mb-6">
            By: {author}
          </h3>
          <hr className="border-[#13131326] mb-4" />
          <h3 className="font-work-sans text-xl font-medium text-[#131313cc] mb-4">
            {category}
          </h3>
          <hr className="border-[#13131326] mb-6" />
          <p className="font-work-sans text-base font-bold text-[#131313] mb-6">
            Review:{" "}
            <span className="font-normal text-[#131313b3]">{review}</span>
          </p>
          <div className="flex gap-3 items-center mb-6">
            <h4 className="font-work-sans text-base font-bold text-[#131313]">
              Tags
            </h4>
            {tags.map((tag, index) => (
              <h4
                key={index}
                className="font-work-sans text-base font-medium text-[#23BE0A] bg-[#23be0a0d] px-4 py-1 rounded-4xl"
              >
                #{tag}
              </h4>
            ))}
          </div>
          <hr className="border-[#13131326] mb-6" />
          <div className="flex items-center gap-24 mb-8">
            <div className="flex flex-col gap-3">
              <h4 className="font-work-sans text-base font-normal text-[#131313b3]">
                Number of Pages:
              </h4>
              <h4 className="font-work-sans text-base font-normal text-[#131313b3]">
                Publisher:
              </h4>
              <h4 className="font-work-sans text-base font-normal text-[#131313b3]">
                Year of Publishing:
              </h4>
              <h4 className="font-work-sans text-base font-normal text-[#131313b3]">
                Rating:
              </h4>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-work-sans text-base font-semibold text-[#131313]">
                {totalPages}
              </h4>
              <h4 className="font-work-sans text-base font-semibold text-[#131313]">
                {publisher}
              </h4>
              <h4 className="font-work-sans text-base font-semibold text-[#131313]">
                {yearOfPublishing}
              </h4>
              <h4 className="font-work-sans text-base font-semibold text-[#131313]">
                {rating}
              </h4>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleMarkAsReadButtonClick(bookId)}
              className="font-work-sans text-base font-semibold text-[#131313]  px-7 py-4 border border-[#1313134d] rounded-lg cursor-pointer active:scale-95"
            >
              Mark as Read
            </button>
            <button className="font-work-sans text-base font-semibold text-white bg-[#59C6D2] px-7 py-4 rounded-lg cursor-pointer active:scale-95">
              Wishlist
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BookDetails;
