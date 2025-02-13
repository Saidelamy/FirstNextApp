import PostDeatils from "@/app/components/postDeatils";
import { Suspense } from "react";

export default async function PostDetailsPage({ params }) {
  const postId = params.postId;

  return (
    <>
      <h1>Post Details</h1>
      <div>
        <Suspense fallback={<div className="text-5xl">Loading...</div>}>
          <PostDeatils postId={postId} />
        </Suspense>
      </div>
    </>
  );
}
