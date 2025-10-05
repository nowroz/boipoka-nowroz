import NavigationLink from "./NavigationLink";

const Navbar = () => {
  return (
    <nav className="container mx-auto my-12 px-4 ">
      <section className="flex justify-between items-center">
        <h3 className="font-work-sans text-3xl font-bold text-[#131313]">
          BoiPoka
        </h3>
        <ul className="flex gap-8 items-center">
          <NavigationLink path="/" innerText="Home"></NavigationLink>
          <NavigationLink
            path="/listed-books"
            innerText="Listed Books"
          ></NavigationLink>
          <NavigationLink
            path="/pages-to-read"
            innerText="Pages to Read"
          ></NavigationLink>
        </ul>
        <div className="flex items-center gap-4">
          <button className="font-work-sans text-base font-semibold text-white bg-[#23BE0A] px-5 py-3 rounded-lg">
            Sign In
          </button>
          <button className="font-work-sans text-base font-semibold text-white bg-[#59C6D2] px-5 py-3 rounded-lg">
            Sign Up
          </button>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
