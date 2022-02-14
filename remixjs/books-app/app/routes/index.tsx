import { Box, Text, Form, Button, FormField, TextInput } from "grommet";
import { FormSearch } from "grommet-icons";
import { useState } from "react";

import Book from "../components/book";

const handleSubmit = async (term: string) => {
  console.log(`Search for: "${term}"`);
};

export default function Index() {
  const [searchTerm, setSearchTerm] = useState("");

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
        <Book
          thumbnailSrc="https://covers.openlibrary.org/b/id/240726-M.jpg"
          title="Title"
          author="Author"
          isLiked={true}
        />
        <Book
          thumbnailSrc="https://covers.openlibrary.org/b/id/240726-M.jpg"
          title="Title"
          author="Author"
          isLiked={true}
        />
        <Book
          thumbnailSrc="https://covers.openlibrary.org/b/id/240726-M.jpg"
          title="Title"
          author="Author"
          isLiked={true}
        />
      </Box>
    </Box>
  );
}
