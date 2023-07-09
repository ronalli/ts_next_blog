"use client";

import { usePost } from "@/store";
import Link from "next/link";
import { useEffect } from "react";

export const Posts = () => {
  const [posts, loading, getAllPost] = usePost((state) => [
    state.posts,
    state.loading,
    state.getAllPost,
  ]);

  useEffect(() => {
    getAllPost();
  }, [getAllPost]);

  return (
    <>
      {loading ? <h1>Loading</h1> : ""}
      <ul>
        {posts.map((post: any) => {
          return (
            <li key={post.id}>
              <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
