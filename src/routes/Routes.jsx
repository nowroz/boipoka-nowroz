import { createBrowserRouter } from "react-router";
import Root from "../pages/root/Root";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Home from "../pages/home/Home";
import BookDetails from "../pages/bookDetails/BookDetails";
import ListedBooks from "../pages/listedBooks/ListedBooks";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch("/books.json"),
        Component: Home,
      },
      {
        path: "book-details/:bookId",
        loader: () => fetch("/books.json"),
        Component: BookDetails,
      },
      {
        path: "listed-books",
        loader: () => fetch("/books.json"),
        Component: ListedBooks,
      },
    ],
  },
]);

export default router;
