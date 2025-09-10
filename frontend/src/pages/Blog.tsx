import { useParams } from "react-router-dom";
import { Appbar } from "../components/Appbar";
import { LoadingSkeleton } from "../components/LoadingSkeleton";
import { useBlog } from "../hooks";
import { FullBlog } from "../components/FullBlog";

export function Blog() {
  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: id || "",
  });

  if (loading) {
    return (
      <div>
        <Appbar />
        <LoadingSkeleton variant="full" />
      </div>
    );
  }
  return (
    <div>
      {blog ? (
        <FullBlog blog={blog} />
      ) : (
        <div className="text-center mt-8">
          <h2>Blog not found</h2>
          <p>The blog you're looking for doesn't exist.</p>
        </div>
      )}
    </div>
  );
}
