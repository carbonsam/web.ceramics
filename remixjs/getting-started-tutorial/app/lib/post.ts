import path from "path";
import fs from "fs/promises";
import parseFrontMatter from "front-matter";
import invariant from "tiny-invariant";
import { marked } from "marked";

export type Post = {
  slug: string;
  title: string;
};

export type PostMarkdownAttributes = {
  title: string;
};

const postsPath = path.join(__dirname, "..", "data", "posts");

const isValidPostAttributes = (
  attributes: any
): attributes is PostMarkdownAttributes => attributes?.title;

export const getPosts = async () => {
  const dir = await fs.readdir(postsPath);

  return Promise.all(
    dir.map(async (filename) => {
      const file = await fs.readFile(path.join(postsPath, filename));
      const { attributes } = parseFrontMatter(file.toString());
      invariant(
        isValidPostAttributes(attributes),
        `${filename} has bad metadata!`
      );
      return {
        slug: filename.replace(/\.md$/, ""),
        title: attributes.title,
      };
    })
  );
};

export const getPost = async (slug: string) => {
  const filepath = path.join(postsPath, `${slug}.md`);
  const file = await fs.readFile(filepath);
  const { attributes, body } = parseFrontMatter(file.toString());
  invariant(
    isValidPostAttributes(attributes),
    `Post ${filepath} has bad metadata!`
  );
  const html = marked(body);
  return {
    slug,
    html,
    title: attributes.title,
  };
};
