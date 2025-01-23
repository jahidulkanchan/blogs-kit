import Link from "next/link";
import { MdKeyboardBackspace } from "react-icons/md";
const BlogPage = async({params}) => {
  const { id } = await params;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const singlePost = await response.json();
  const {userId,title,body} = singlePost;
  return (
    <>
       <div className="bg-slate-50 min-h-[600px] container flex justify-center items-center mx-auto shadow">
          <div className="bg-white min-h-[200px] rounded-xl px-5 py-4 shadow-md lg:w-1/2">
          <h2 className="text-3xl mb-3">{title}</h2>
          <p className="text-justify text-slate-600">{body}</p>
          <Link className="block text-2xl mt-4 w-fit" href='/' ><MdKeyboardBackspace /></Link>
          </div>
       </div>
    </>
  );
};

export default BlogPage;