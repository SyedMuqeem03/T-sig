import { useRouteError } from "react-router-dom";
import Btn from "./Btn";
import { Link } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="min-h-screen bg-slate-600 text-white flex flex-col justify-center items-center gap-4 ">
      <span className="text-[120px] font-extrabold">Oops...</span>
      <span className="text-3xl font-medium">
        The page you are looking for{" "}
        <code className="p-1 bg-white/30 rounded-md">
          {window.location.pathname}
        </code>{" "}
        is {error.statusText}{" "}
      </span>

      <Link
        to={"/"}

      >
        {
          <Btn
            text="Back to Home"
            className="m-4"
          />
        }
      </Link>
    </div>
  );
}

export default ErrorPage;
