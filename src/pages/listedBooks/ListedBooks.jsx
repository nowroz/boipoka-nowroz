import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadBooksList from "../../components/readBooksList/ReadBooksList";
import { useLoaderData } from "react-router";
import { getReadBooksFromLocalStorage as getReadBooks } from "../../utils/storage";

const ListedBooks = () => {
  const books = useLoaderData();
  const readBooks = getReadBooks();

  return (
    <main className="container mx-auto px-4">
      <section className="bg-[#1313130d] rounded-3xl p-20 my-20">
        <h1 className="font-playfair-display text-5xl font-bold text-[#131313] text-center">
          Book List
        </h1>
      </section>
      <section>
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Title 2</Tab>
          </TabList>

          <TabPanel>
            <ReadBooksList books={books} readBooks={readBooks}></ReadBooksList>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </section>
    </main>
  );
};

export default ListedBooks;
