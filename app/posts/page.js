import Link from "next/link";
import Todo from "../components/Todo";
export const metadata = { title: "post page" };

export default async function PostPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const todo = await response.json();

  console.log(todo);

  return (
    <>
      <div className="flex text-9xl flex-col gap-10 justify-center ">
        post page
        <Link href={`/articles`}>take me home</Link>
        <h3>title {todo.title}</h3>
        <h3>
          <Todo />
        </h3>
      </div>
    </>
  );
}
