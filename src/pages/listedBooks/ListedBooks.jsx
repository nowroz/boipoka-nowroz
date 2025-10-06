import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadBooksList from "../../components/readBooksList/ReadBooksList";
import { useLoaderData } from "react-router";
import { getReadBooksFromLocalStorage as getReadBooks } from "../../utils/storage";
import { useState } from "react";

const ListedBooks = () => {
  const books = useLoaderData();
  const [sortType, setSortType] = useState("");
  const readBooks = getReadBooks();

  const handleSortByButtonClick = (type) => {
    setSortType(type);
  };

  return (
    <main className="container mx-auto px-4">
      <section className="bg-[#1313130d] rounded-3xl p-20 my-20">
        <h1 className="font-playfair-display text-5xl font-bold text-[#131313] text-center">
          Book List
        </h1>
      </section>
      <section className="flex flex-col">
        <div className="dropdown mb-10 self-center">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort By: {sortType}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a onClick={() => handleSortByButtonClick("Rating")}>Rating</a>
            </li>
            <li>
              <a onClick={() => handleSortByButtonClick("Pages")}>
                Number of Pages
              </a>
            </li>
            <li>
              <a onClick={() => handleSortByButtonClick("Published Year")}>
                Pulbished Year
              </a>
            </li>
          </ul>
        </div>
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Title 2</Tab>
          </TabList>

          <TabPanel>
            <ReadBooksList
              books={books}
              readBooks={readBooks}
              sortType={sortType}
            ></ReadBooksList>
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
