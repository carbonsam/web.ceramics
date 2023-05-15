export const getTitleCaseFromSlug = (slug) =>
  unslugify(slug)
    .split(" ")
    .map((x) => x[0].toUpperCase() + x.slice(1))
    .join(" ")
    .replaceAll("/", "&");

export const slugify = (string) =>
  string.replaceAll(" ", "-").replaceAll("/", "&").toLowerCase();

export const unslugify = (slug) =>
  slug.replaceAll("-", " ").replaceAll("&", "/");

export default {
  getTitleCaseFromSlug,
  slugify,
  unslugify,
};
