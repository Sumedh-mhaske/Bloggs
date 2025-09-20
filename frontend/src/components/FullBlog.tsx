import type { BlogType } from "../hooks";
import { Appbar } from "./Appbar";
import { Avatar } from "./Avatar";

export function FullBlog({ blog }: { blog: BlogType }) {
  const readTime = Math.ceil(blog.content.length / 200);

  return (
    <div className="min-h-screen bg-white">
      <Appbar />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-slate-900 to-slate-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3), transparent 50%),
                                  radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3), transparent 50%),
                                  radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.3), transparent 50%)`,
            }}
          ></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 py-16 sm:py-24">
          <div className="text-center space-y-6">
            {/* Category Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-200 border border-blue-400/30">
              📖 Blog Post
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              {blog.title}
            </h1>

            {/* Meta Info */}
            <div className="flex items-center justify-center space-x-6 text-gray-300">
              <div className="flex items-center space-x-2">
                <Avatar size="small" name={blog.author.name || "Anonymous"} />
                <span className="font-medium">
                  {blog.author.name || "Anonymous"}
                </span>
              </div>
              <div className="w-1 h-1 rounded-full bg-gray-400"></div>
              <time className="text-sm">September 9, 2025</time>
              <div className="w-1 h-1 rounded-full bg-gray-400"></div>
              <span className="text-sm">{readTime} min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="prose prose-lg prose-gray max-w-none">
              <div className="text-xl leading-relaxed text-gray-700 whitespace-pre-wrap font-light">
                {blog.content}
              </div>
            </article>

            {/* Engagement Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-2 px-4 py-2 rounded-full bg-red-50 text-red-600 hover:bg-red-100 transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    <span className="font-medium">42</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors">
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
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                    <span className="font-medium">12</span>
                  </button>
                </div>
                <button className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-50 text-gray-600 hover:bg-gray-100 transition-colors">
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
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                    />
                  </svg>
                  <span className="font-medium">Share</span>
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* Author Card */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="text-sm font-medium text-gray-500 mb-4">
                  AUTHOR
                </div>
                <div className="flex items-start space-x-4">
                  <Avatar size="big" name={blog.author.name || "Anonymous"} />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {blog.author.name || "Anonymous"}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Passionate writer sharing insights about technology, life,
                      and everything in between.
                    </p>
                    <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                      Follow
                    </button>
                  </div>
                </div>
              </div>

              {/* Reading Progress */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
                <div className="text-sm font-medium text-green-700 mb-2">
                  📊 Reading Stats
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Reading time</span>
                    <span className="font-medium text-gray-900">
                      {readTime} minutes
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Words</span>
                    <span className="font-medium text-gray-900">
                      {blog.content.split(" ").length}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Published</span>
                    <span className="font-medium text-gray-900">Today</span>
                  </div>
                </div>
              </div>

              {/* Table of Contents (for future) */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
                <div className="text-sm font-medium text-purple-700 mb-3">
                  ✨ Quick Actions
                </div>
                <div className="space-y-2">
                  <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-white/60 rounded-lg transition-colors">
                    🔖 Save for later
                  </button>
                  <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-white/60 rounded-lg transition-colors">
                    📤 Share article
                  </button>
                  <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-white/60 rounded-lg transition-colors">
                    🚩 Report issue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
