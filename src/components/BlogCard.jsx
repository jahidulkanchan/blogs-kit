import Link from "next/link";

const BlogCard = ({post}) => {
  const {id,title,body} = post;
  return (
    <>
      <main>
        <div className="card min-h-[200px] px-5 py-3 shadow-md rounded-lg">
        <div className="card-body flex flex-col" >
          <h2 className="card-title text-2xl font-medium">{title.slice(0,25)}...</h2>
          <p className="flex-grow">{body.slice(0,150)}...</p>
          <div className="card-actions justify-end">
            <Link href={`/blog/${id}`} className="btn mt-5 w-fit btn-primary bg-slate-200 text-black px-5 py-2 rounded text-sm block ml-auto">Details</Link>
          </div>
        </div>
      </div>
      </main>
    </>
  );
};

export default BlogCard;