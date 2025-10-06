import { useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <section className="container mx-auto my-20 px-4 text-center">
      <h1 className="text-7xl font-medium mb-8">Error</h1>
      <p className="text-xl font-normal">{error.message}</p>
    </section>
  );
};

export default ErrorPage;
