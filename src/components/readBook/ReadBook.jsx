import { FileChartColumnIncreasing, MapPin, UsersRound } from "lucide-react";
import { useNavigate } from "react-router";

const ReadBook = ({ readBook }) => {
  const navigate = useNavigate();

  const {
    bookId,
    bookName,
    author,
    image,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = readBook;

  const handleViewDetailsButtonOnClick = (bookId) => {
    navigate(`/book-details/${bookId}`);
  };

  return (
    <div className="border border-[#13131326] rounded-2xl p-8 flex items-center gap-8">
      <div className="w-72 h-72 p-8 rounded-2xl bg-[#1313130d] flex justify-center">
        <img className="h-full" src={image} alt="" />
      </div>
      <div className="flex-1">
        <h4 className="font-playfair-display text-2xl font-bold text-[#131313] mb-2">
          {bookName}
        </h4>
        <h5 className="font-work-sans text-base font-medium text-[#131313cc] mb-4">
          By: {author}
        </h5>
        <div className="flex items-center gap-8 mb-6">
          <span className="flex items-center gap-2">
            <h5 className="font-work-sans text-base font-bold text-[#131313]">
              Tag
            </h5>
            {tags.map((tag, index) => (
              <h5
                key={index}
                className="font-work-sans text-base font-medium text-[#23BE0A] bg-[#23be0a0d] px-4 py-1 rounded-4xl"
              >
                #{tag}
              </h5>
            ))}
          </span>
          <span className="flex items-center gap-1">
            <MapPin color="#424242" strokeWidth={2} />
            <h5 className="font-work-sans text-base font-normal text-[#131313cc]">
              Year of Publishing: {yearOfPublishing}
            </h5>
          </span>
        </div>
        <div className="flex items-center gap-8 mb-4">
          <span className="flex items-center gap-1">
            <UsersRound color="#13131399" />
            <h5 className="font-work-sans text-base font-normal text-[#13131399]">
              Publisher: {publisher}
            </h5>
          </span>
          <span className="flex items-center gap-1">
            <FileChartColumnIncreasing color="#13131399" />
            <h5 className="font-work-sans text-base font-normal text-[#13131399]">
              Pages: {totalPages}
            </h5>
          </span>
        </div>
        <hr className="border-[#13131326] mb-4" />
        <div className="flex items-center gap-6">
          <h5 className="font-work-sans text-base font-normal text-[#328EFF] bg-[#328eff26] px-4 py-1 rounded-4xl">
            Category: {category}
          </h5>
          <h5 className="font-work-sans text-base font-normal text-[#FFAC33] bg-[#ffac3326] px-4 py-1 rounded-4xl">
            Rating: {rating}
          </h5>
          <button
            onClick={() => handleViewDetailsButtonOnClick(bookId)}
            className="font-work-sans text-base font-medium text-white bg-[#23BE0A] px-4 py-1 rounded-4xl cursor-pointer active:scale-95"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReadBook;
