import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";
import { Circle } from "./Circle";

interface BlogCardTypes {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id: number;
  index?: number;
}

export function BlogCard({
  id,
  authorName,
  title,
  content,
  publishedDate,
  index = 0,
}: BlogCardTypes) {
  // Generate gradient colors based on index
  const gradients = [
    "from-rose-400 to-pink-500",
    "from-blue-400 to-indigo-500",
    "from-emerald-400 to-teal-500",
    "from-amber-400 to-orange-500",
    "from-purple-400 to-violet-500",
    "from-cyan-400 to-blue-500",
  ];

  const gradientClass = gradients[index % gradients.length];
  const readTime = Math.ceil(content.length / 200);

  return (
    <div className="group">
      <Link to={`/blog/${id}`}>
        <article className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200 transform hover:-translate-y-1">
          {/* Gradient Header */}
          <div className={`h-2 bg-gradient-to-r ${gradientClass}`}></div>

          {/* Content */}
          <div className="p-6">
            {/* Author Info */}
            <div className="flex items-center space-x-3 mb-4">
              <Avatar size="small" name={authorName} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {authorName}
                  </p>
                  <Circle />
                  <time className="text-sm text-gray-500">{publishedDate}</time>
                </div>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
              {title}
            </h2>

            {/* Content Preview */}
            <p className="text-gray-600 text-base leading-relaxed mb-4 line-clamp-3">
              {content.replace(/\n/g, " ").slice(0, 150)}
              {content.length > 150 ? "..." : ""}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span className="flex items-center space-x-1">
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{readTime} min read</span>
                </span>
              </div>

              <div className="flex items-center space-x-1 text-blue-600 group-hover:text-blue-700 transition-colors">
                <span className="text-sm font-medium">Read more</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </article>
      </Link>
    </div>
  );
}
