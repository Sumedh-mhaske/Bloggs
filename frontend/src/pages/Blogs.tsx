import { BlogCard } from "../components/BlogCard";

export function Blogs() {
  return (
    <div className="flex justify-center">
      <div className="max-w-xl">
        <BlogCard
          authorName="Sumedh Mhaske"
          title="How an ugly single page website makes $5000 a month with affiliate marketting"
          content="How an ugly single page website makes $5000 a month with affiliate marketting How an ugly single page website makes $5000 a month with affiliate marketting"
          publishedDate="9 Aug 2025"
        />
        <BlogCard
          authorName="Sumedh Mhaske"
          title="How an ugly single page website makes $5000 a month with affiliate marketting"
          content="How an ugly single page website makes $5000 a month with affiliate marketting How an ugly single page website makes $5000 a month with affiliate marketting"
          publishedDate="9 Aug 2025"
        />
        <BlogCard
          authorName="Sumedh Mhaske"
          title="How an ugly single page website makes $5000 a month with affiliate marketting"
          content="How an ugly single page website makes $5000 a month with affiliate marketting How an ugly single page website makes $5000 a month with affiliate marketting"
          publishedDate="9 Aug 2025"
        />
      </div>
    </div>
  );
}
