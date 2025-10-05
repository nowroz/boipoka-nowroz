import { useLoaderData } from "react-router";
import Banner from "../../components/banner/Banner";
import Books from "../../components/books/Books";

const Home = () => {
  const books = useLoaderData();

  return (
    <main className="container mx-auto px-4 ">
      <Banner></Banner>
      <Books books={books}></Books>
    </main>
  );
};

export default Home;
