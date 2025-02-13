import Link from "next/link";
import Todo from "../components/Todo";
export const metadata = { title: "post page" };

export default async function PostPage() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    next: {
      revalidate: 120,
    },
  });
  const posts = await response.json();
  const postss = posts.slice(0, 12);

  return (
    <>
      <div className="flex text-9xl flex-col gap-10 justify-center mx-10 ">
        post page
        <Link href={`/articles`}>take me home</Link>
        <div className="grid grid-cols-3 gap-5">
          {postss.map((post) => {
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
      </div>
    </>
  );
}
