import BlogCard from "@/components/BlogCard";
import Image from "next/image";

export default async function Home() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  const slicePost = posts.slice(0,36)
  return (
    <div className="py-10 container bg-slate-50 mx-auto px-5">
      <main>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {slicePost?.map(post=> <BlogCard post={post}  key={post.id}></BlogCard>)}
        </div>
      </main>
    </div>
  );
}
