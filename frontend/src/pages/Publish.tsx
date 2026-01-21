import { useState, type ChangeEvent } from "react";
import { Appbar } from "../components/Appbar";
import axios from "axios";
import { BACKEND_URL } from "../config.tsx";
import { useNavigate } from "react-router-dom";

export function Publish() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const navigate = useNavigate();

  const handlePublish = async () => {
    if (!title.trim() || !content.trim()) {
      alert("Please fill in both title and content");
      return;
    }

    setIsPublishing(true);
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/blog`,
        { title, content },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        },
      );
      navigate(`/blog/${response.data.id}`);
    } catch (error) {
      alert("Error publishing post. Please try again.");
      setIsPublishing(false);
    }
  };

  const wordCount = content
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0).length;
  const readTime = Math.ceil(wordCount / 200);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Appbar />

      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Write your story
              </h1>
              <p className="text-gray-600 mt-1">
                Share your thoughts with the world
              </p>
            </div>
            <div className="flex items-center space-x-4">
              {/* Stats */}
              <div className="hidden sm:flex items-center space-x-4 text-sm text-gray-500">
                <span>{wordCount} words</span>
                <span>•</span>
                <span>{readTime} min read</span>
              </div>

              {/* Publish button */}
              <button
                onClick={handlePublish}
                disabled={isPublishing || !title.trim() || !content.trim()}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isPublishing ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Publishing...</span>
                  </>
                ) : (
                  <>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                    <span>Publish</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Title Input */}
          <div className="p-6 border-b border-gray-100">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Give your story a captivating title..."
              className="w-full text-3xl font-bold text-gray-900 placeholder-gray-400 border-none outline-none resize-none bg-transparent"
            />
          </div>

          {/* Toggle Tabs */}
          <div className="flex border-b border-gray-200 bg-gray-50">
            <button
              onClick={() => setShowPreview(false)}
              className={`flex-1 px-6 py-4 font-medium transition-colors ${
                !showPreview
                  ? "text-blue-600 bg-white border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <div className="flex items-center justify-center space-x-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
                <span>Write</span>
              </div>
            </button>
            <button
              onClick={() => setShowPreview(true)}
              className={`flex-1 px-6 py-4 font-medium transition-colors ${
                showPreview
                  ? "text-blue-600 bg-white border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <div className="flex items-center justify-center space-x-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                <span>Preview</span>
              </div>
            </button>
          </div>

          {/* Content Area */}
          <div className="min-h-[500px]">
            {!showPreview ? (
              <TextEditor
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            ) : (
              <PreviewArea title={title} content={content} />
            )}
          </div>
        </div>

        {/* Writing Tips */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-blue-900">Writing Tips</h3>
            </div>
            <p className="text-sm text-blue-700">
              Start with a compelling hook. Keep paragraphs short and use clear,
              concise language.
            </p>
          </div>

          <div className="bg-green-50 rounded-xl p-6 border border-green-100">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-green-900">SEO Friendly</h3>
            </div>
            <p className="text-sm text-green-700">
              Use relevant keywords naturally. Write meta descriptions and
              engaging titles.
            </p>
          </div>

          <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-purple-900">Engage Readers</h3>
            </div>
            <p className="text-sm text-purple-700">
              Ask questions, share personal experiences, and encourage comments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextEditor({
  value,
  onChange,
}: {
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <div className="p-6">
      <textarea
        value={value}
        onChange={onChange}
        placeholder="Tell your story...

Start typing here. You can write multiple paragraphs, and your formatting will be preserved.

Press Enter to create line breaks.
Add blank lines to separate sections.

Remember: Great stories have a beginning, middle, and end!"
        className="w-full h-96 text-lg text-gray-700 placeholder-gray-400 border-none outline-none resize-none bg-transparent leading-relaxed"
        style={{ minHeight: "400px" }}
      />
    </div>
  );
}

function PreviewArea({ title, content }: { title: string; content: string }) {
  return (
    <div className="p-6">
      <div className="prose prose-lg max-w-none">
        {title ? (
          <h1 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
            {title}
          </h1>
        ) : (
          <h1 className="text-3xl font-bold text-gray-400 mb-6 leading-tight">
            Your title will appear here
          </h1>
        )}

        <div className="text-lg text-gray-700 whitespace-pre-wrap leading-relaxed">
          {content || (
            <span className="text-gray-400">
              Your story content will appear here as you type. Switch back to
              Write mode to continue editing.
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
