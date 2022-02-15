import { Outlet, Link, useLoaderData } from "remix";

import { getPosts } from "~/lib/post";
import type { Post } from "~/lib/post";

import adminStyles from "~/styles/admin.css";

export const links = () => {
  return [{ rel: "stylesheet", href: adminStyles }];
};

export const loader = async () => {
  return getPosts();
};

export default function Admin() {
  const posts = useLoaderData<Post[]>();

  return (
    <div className="admin">
      <nav>
        <h1>Admin</h1>
        <ul>
          {posts.map((p) => (
            <li key={p.slug}>
              <Link to={`/posts/${p.slug}`}>{p.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
