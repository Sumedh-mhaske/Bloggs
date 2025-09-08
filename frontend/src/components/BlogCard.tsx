import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";
import { Circle } from "./Circle";

interface BlogCardTypes {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id: number;
}

export function BlogCard({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardTypes) {
  return (
    <Link to={`/blog${id}`}>
      <div className="p-4 border-b border-slate-200 max-w-screen-md pb-4 w-screen cursor-pointer">
        <div className="flex">
          <Avatar size="small" name={authorName} />
          <div className="flex pl-2 justify-center flex-col font-light text-slate-500 text-sm">
            {authorName}
          </div>
          <div className="flex justify-center pl-2 flex-col text-6xl">
            <Circle />
          </div>
          <div className="flex pl-2 font-thin text-sm justify-center text-slate-500 flex-col">
            {publishedDate}
          </div>
        </div>
        <div className="text-xl font-bold pt-2">{title}</div>
        <div>
          {content.length > 100 ? content.slice(0, 100) + "..." : content}
        </div>
        <div className="pt-4 text-sm font-light text-slate-500 pb-6">{`${Math.ceil(content.length / 60)} min read`}</div>
      </div>
    </Link>
  );
}
