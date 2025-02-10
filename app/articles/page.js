import Link from "next/link";

export default function ArticlePage() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div>article page </div>
        <Link href={`/posts`}>take me home</Link>
      </div>
    </>
  );
}
