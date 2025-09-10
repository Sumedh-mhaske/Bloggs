import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { LoadingSkeleton } from "../components/LoadingSkeleton";
import { useBlogs } from "../hooks";

export function Blogs() {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return (
      <div>
        <Appbar />
        <LoadingSkeleton variant="list" />
      </div>
    );
  }

  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div>
          {blogs.map((blog) => (
            <BlogCard
              id={blog.id}
              key={`blog${blog.id}`}
              authorName={blog.author.name || "Anonymous"}
              title={blog.title}
              content={blog.content}
              publishedDate="9 Aug 2025"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
