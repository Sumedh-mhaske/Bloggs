import { useState, type ChangeEvent } from "react";
import { Appbar } from "../components/Appbar";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function Publish() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <Appbar />
      <div className="w-[95%] m-auto">
        <div className="flex justify-center w-full pt-8">
          <div className="max-w-screen-lg w-full">
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-xl font-bold rounded-lg block w-full p-3 focus:outline-none placeholder:font-bold placeholder:text-xl"
              placeholder="Title"
            />
            <TextEditor onChange={(e) => setContent(e.target.value)} />

            <button
              type="button"
              onClick={async () => {
                const response = await axios.post(
                  `${BACKEND_URL}/api/v1/blog`,
                  {
                    title,
                    content,
                  },
                  {
                    headers: {
                      Authorization: localStorage.getItem("token"),
                    },
                  },
                );
                navigate(`/blog/${response.data.id}`);
              }}
              className="mt-2 cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
              Publish Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextEditor({
  onChange,
}: {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <form>
      <div className="w-full mb-4">
        <div className="flex justify-center items-center">
          <div className="my-2 bg-white rounded-b-lg w-full">
            <textarea
              rows={10}
              onChange={onChange}
              className="max-w-full-lg  mt-4 block p-3 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none placeholder:font-bold placeholder:text-xl"
              placeholder="Write your blog here..."
            ></textarea>
          </div>
        </div>
      </div>
    </form>
  );
}
