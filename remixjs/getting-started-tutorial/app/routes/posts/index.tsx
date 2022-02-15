import { Link, useLoaderData } from "remix";
import { getPosts } from "~/lib/post";
import type { Post } from "~/lib/post";

export const loader = async () => getPosts();

export default function Posts() {
  const posts = useLoaderData<Post[]>();

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((p) => (
          <li key={p.slug}>
            <Link to={p.slug}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
