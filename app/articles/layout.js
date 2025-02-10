export const metadata = { title: "articles page" };
export default function ArticleLayout({ children }) {
  return (
    <div>
      <h2 className="text-3xl flex justify-center">article</h2>
      <div className="text-5xl bg-amber-400">{children}</div>
    </div>
  );
}
