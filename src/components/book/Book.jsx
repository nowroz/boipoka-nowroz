import { Star } from "lucide-react";
import { useNavigate } from "react-router";

const Book = ({ book }) => {
  const navigate = useNavigate();

  const { bookId, bookName, author, image, rating, category, tags } = book;

  const handleOnClick = () => {
    navigate(`/book-details/${bookId}`);
  };

  return (
    <div
      onClick={handleOnClick}
      className="border border-[#13131326] rounded-2xl p-6 cursor-pointer hover:shadow-lg"
    >
      <div className="h-64  bg-[#F3F3F3] rounded-2xl flex justify-center items-center mb-2">
        <img className="h-48 " src={image} alt="" />
      </div>
      <div className="flex gap-3 items-center mb-4">
        {tags.map((tag, index) => (
          <h5
            key={index}
            className="font-work-sans text-xs font-medium text-[#23BE0A] bg-[#23be0a0d] px-3 py-1 rounded-4xl"
          >
            {tag}
          </h5>
        ))}
      </div>
      <h4 className="font-playfair-display text-xl font-bold text-[#131313] mb-3">
        {bookName}
      </h4>
      <h5 className="font-work-sans text-base font-medium text-[#131313cc] mb-4">
        By: {author}
      </h5>
      <hr className="border-dashed border-[#13131326] mb-4" />
      <div className="flex justify-between items-center">
        <h5 className="font-work-sans text-base font-medium text-[#131313cc]">
          {category}
        </h5>
        <span className="flex items-center gap-3">
          <h5 className="font-work-sans text-base font-medium text-[#131313cc]">
            {rating}
          </h5>
          <Star color="#131313cc" />
        </span>
      </div>
    </div>
  );
};

export default Book;
