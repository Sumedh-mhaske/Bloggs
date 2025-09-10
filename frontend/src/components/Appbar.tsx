import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";

export function Appbar() {
  return (
    <div className="px-10 border-b py-4 flex justify-between text-2xl">
      <Link
        to={"/blogs"}
        className="flex justify-center flex-col cursor-pointer"
      >
        Bloggs
      </Link>
      <div className="flex justify-center">
        <Link to={"/publish"}>
          <button
            type="button"
            className="mr-4 cursor-pointer text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 "
          >
            Green
          </button>
        </Link>

        <Avatar size="big" name="Sumedh" />
      </div>
    </div>
  );
}
