import Link from "next/link";

export default function ArticlePage() {
  return (
    <>
      <div className="flex text-9xl flex-col  items-center">
        <div>article page </div>
        <Link href={`/FetcherArticles`}>FetcherArticles</Link>
      </div>
    </>
  );
}
