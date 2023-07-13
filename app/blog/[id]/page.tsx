import { Metadata } from "next";

async function getPost(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  return response.json();
}

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
	const post = await getPost(id);
  return {
    title: `${post.title} | Next app`,
  };
}

export default async function Post({ params: { id } }: Props) {
  const post = await getPost(id);

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
}
