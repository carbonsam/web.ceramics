import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import invariant from "tiny-invariant";

import { getPost } from "~/lib/post";

export const loader = async ({ params }): LoaderFunction => {
  invariant(params.postId, "expected params.postId");
  return getPost(params.postId);
};

export default function PostSlug() {
  const post = useLoaderData();

  return <div dangerouslySetInnerHTML={{ __html: post.html }} />;
}
