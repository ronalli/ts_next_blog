"use client";
import useSWR from 'swr';
import Link from "next/link";
import { getAllPosts } from '@/services/getPosts';

export const Posts = () => {

	const {data: posts, isLoading} = useSWR('posts', getAllPosts)

  return (
    <>
      {isLoading ? <h1>Loading</h1> : ""}
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
