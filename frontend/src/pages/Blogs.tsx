import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { LoadingSkeleton } from "../components/LoadingSkeleton";
import { useBlogs } from "../hooks";

export function Blogs() {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Appbar />
        <LoadingSkeleton variant="list" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Appbar />

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
              Discover Amazing
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
                Stories
              </span>
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-2xl mx-auto">
              Explore thought-provoking articles, inspiring stories, and
              insights from talented writers around the world.
            </p>
            <div className="mt-8">
              <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-sm font-medium">
                  📚 {blogs.length} stories to discover
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-white/5"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-white/5"></div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Latest Articles
          </h2>
          <p className="text-gray-600 text-lg">
            Fresh insights and stories from our community
          </p>
        </div>

        {blogs.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              No stories yet
            </h3>
            <p className="text-gray-500">
              Be the first to share your thoughts!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <BlogCard
                key={`blog-${blog.id}`}
                id={blog.id}
                authorName={blog.author.name || "Anonymous"}
                title={blog.title}
                content={blog.content}
                publishedDate="9 Aug 2025"
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
