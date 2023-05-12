export const getTitleCaseFromSlug = (slug) =>
  slug
    .replaceAll("_", " ")
    .split(" ")
    .map((x) => x[0].toUpperCase() + x.slice(1))
    .join(" ");

export default {
  getTitleCaseFromSlug,
};
