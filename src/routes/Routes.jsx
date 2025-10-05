import { createBrowserRouter } from "react-router";
import Root from "../pages/root/Root";
import ErrorPage from "../pages/errorPage/ErrorPage";

const router = createBrowserRouter([
  { path: "/", Component: Root, errorElement: <ErrorPage></ErrorPage> },
]);

export default router;
