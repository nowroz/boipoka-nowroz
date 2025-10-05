import bannerImg from "../../assets/banner.png";

const Banner = () => {
  return (
    <section className="bg-[#1313130d] rounded-3xl px-32">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-14">
          <h1 className="font-playfair-display text-5xl font-bold text-[#131313] ">
            Books to freshen up <br />
            your bookshelf
          </h1>
          <button className="w-max font-work-sans text-base font-semibold text-white bg-[#23BE0A] px-5 py-3 rounded-lg cursor-pointer active:scale-95">
            View the List
          </button>
        </div>
        <img className="w-[30%] " src={bannerImg} alt="" />
      </div>
    </section>
  );
};

export default Banner;
