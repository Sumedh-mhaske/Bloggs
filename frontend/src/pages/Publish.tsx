import { Appbar } from "../components/Appbar";

export function Publish() {
  return (
    <div>
      <Appbar />
      <div className="w-[95%] m-auto">
        <div className="flex justify-center w-full pt-8">
          <div className="max-w-screen-lg w-full">
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-xl font-bold rounded-lg block w-full p-3 focus:outline-none placeholder:font-bold placeholder:text-xl"
              placeholder="Title"
            />
            <TextEditor />
          </div>
        </div>
      </div>
    </div>
  );
}

function TextEditor() {
  return (
    <form>
      <div className="w-full mb-4">
        <div className="flex justify-center items-center">
          <div className="my-2 bg-white rounded-b-lg w-full">
            <textarea
              rows={10}
              className="max-w-full-lg  mt-4 block p-3 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none placeholder:font-bold placeholder:text-xl"
              placeholder="Write your blog here..."
            ></textarea>
          </div>
        </div>

        <button
          type="button"
          className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Publish Post
        </button>
      </div>
    </form>
  );
}
