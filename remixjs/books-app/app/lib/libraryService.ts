export type Book = {
  key: string;
  title: string;
  first_publish_year: number;
  number_of_pages_median: number;
  book_cover_url: string;
  author_key: string[];
  author_name: string[];
  author_picture_url: string;
};

const bookSearchUrl = "http://openlibrary.org/search.json";
const autherUrl = "https://openlibrary.org/authors/";

const getBookCoverImageUrlById = (id: string) =>
  `https://covers.openlibrary.org/b/id/${id}-S.jpg`;

const getAuthorImageUrlByKey = async (key: string) => {
  const response = await fetch(`${autherUrl}${key}.json`);
  const json = await response.json();
  const imageId = json.photos?.shift() ?? "";
  return `https://covers.openlibrary.org/b/id/${imageId}-S.jpg`;
};

export const getBooksBySearchTerm = async (term: string): Promise<Book[]> => {
  const response = await fetch(`${bookSearchUrl}?q=${term}&limit=10`);
  const json = await response.json();
  const docs = json.docs;
  docs.map(async (d: any) => {
    d.book_cover_url = getBookCoverImageUrlById(d.cover_i);
    d.author_picture_url = await getAuthorImageUrlByKey(d.author_key?.shift());
  });
  return docs as Book[];
};
