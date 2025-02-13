import React from "react";

const PostDeatils = async ({ postId }) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

  const response = await fetch(
    `https://jsonplaceholder.typicode.com//posts/${postId}`,
    {
      next: {
        revalidate: 120,
      },
    }
  );
  const post = await response.json();

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDeatils;
