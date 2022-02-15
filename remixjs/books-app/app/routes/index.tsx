import { Box, Text, Form, Button, FormField, TextInput } from "grommet";
import { FormSearch } from "grommet-icons";
import { useState } from "react";
import type { Book } from "~/lib/libraryService";

import { getBooksBySearchTerm } from "~/lib/libraryService";

import BookCard from "~/components/BookCard";

export default function Index() {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState<Book[]>([]);

  const handleSubmit = async (term: string) => {
    const books = await getBooksBySearchTerm(term);
    setBooks(books);
  };

  return (
    <Box pad="large" gap="medium">
      <Box
        fill="vertical"
        overflow="auto"
        align="start"
        flex="grow"
        gap="medium"
      >
        <Text weight="bold" size="xxlarge">
          Books
        </Text>
        <Form onSubmit={() => handleSubmit(searchTerm)}>
          <Box align="start" justify="start" direction="row" gap="small">
            <FormField>
              <TextInput
                value={searchTerm}
                onChange={(nextValue) => setSearchTerm(nextValue.target.value)}
                plain={false}
                placeholder="Search"
              />
            </FormField>
            <Button
              icon={<FormSearch />}
              type="submit"
              primary
              active={false}
            />
          </Box>
        </Form>
      </Box>

      <Box gap="small" direction="column">
        {books.length < 1 && <Text>No books</Text>}
        {books.length > 0 &&
          books.map((b, i) => (
            <BookCard
              key={`${b.key}-${i}`}
              coverSrc={b.book_cover_url}
              title={b.title}
              authorName={b.author_name?.join(", ") ?? "Unknown"}
              authorSrc={b.author_picture_url}
            />
          ))}
      </Box>
    </Box>
  );
}
