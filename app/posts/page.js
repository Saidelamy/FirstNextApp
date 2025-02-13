import Link from "next/link";
import Pagination from "../components/Pagination";
export const metadata = { title: "post page" };

await new Promise((resolve) => {
  setTimeout(resolve, 2000);
});

export default async function PostPage() {
  const limit = 15;
  const page = 1;
  // fetch all posts
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    next: {
      revalidate: 120,
    },
  });
  const totalPosts = await response.json();
  const totalPage = Math.ceil(totalPosts.length / limit);

  // fetch posts for the current page
  const response2 = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`,
    {
      next: {
        revalidate: 120,
      },
    }
  );
  const displayPosts = await response2.json();

  return (
    <>
      <div className="flex text-9xl flex-col gap-10 justify-center mx-10 ">
        post page
        <Link href={`/articles`}>take me home</Link>
        <div className="grid grid-cols-3 gap-5">
          {displayPosts.map((post) => {
            return (
              <Link href={`/posts/${post.id}`} key={post.id}>
                <div className="bg-green-950 h-full p-2">
                  <div className="text-xl flex flex-col gap-4">
                    <h1 className=" font-extrabold text-2xl">{post.title}</h1>
                    <p className="text-slate-200">{post.body}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="text-3xl">
          <Pagination totalPage={totalPage} currentPage={page} />
        </div>
      </div>
    </>
  );
}
