import { Avatar, Box, Text, Image } from "grommet";
import { Favorite } from "grommet-icons";

export const BookCard = ({ coverSrc, title, authorName, authorSrc }) => {
  return (
    <Box
      fill="vertical"
      overflow="auto"
      align="start"
      flex="grow"
      direction="row"
      gap="medium"
    >
      <Box height="small" width="xsmall">
        <Image fit="cover" src={coverSrc} />
      </Box>

      <Box align="start" justify="center" direction="column" gap="xsmall">
        <Text size="large" textAlign="start">
          {title}
        </Text>

        <Box>
          <Avatar src={authorSrc} size="small" />
          <Text textAlign="start" size="small">
            {authorName}
          </Text>
        </Box>
      </Box>

      <Favorite />
    </Box>
  );
};

export default BookCard;
