import type { BlogType } from "../hooks";
import { Appbar } from "./Appbar";
import { Avatar } from "./Avatar";

export function FullBlog({ blog }: { blog: BlogType }) {
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full pt-12 max-w-screen-xl gap-10">
          <div className="col-span-8">
            <div className="text-5xl font-extrabold">{blog.title}</div>
            <div className="text-slate-500 pt-4">
              Post on 9th September 2025
            </div>
            <div className="pt-6 text-xl whitespace-pre-wrap">
              {blog.content}
            </div>
          </div>
          <div className="col-span-4">
            Author
            <div className="flex w-full">
              <div className="pr-2 flex justify-center flex-col">
                <Avatar size="big" name={blog.author.name || "Anonymous"} />
              </div>
              <div>
                <div className="text-xl font-bold">
                  {blog.author.name || "Anonymous"}
                </div>
                <div className="pt-2 text-slate-500">
                  Random catch phrase about the author's ability to grab the
                  user's attention
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
