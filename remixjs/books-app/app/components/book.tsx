import { Box, Text, Image } from "grommet";
import { Favorite } from "grommet-icons";

export default ({ thumbnailSrc, title, author, isLiked }) => {
  return (
    <Box
      fill="vertical"
      overflow="auto"
      align="start"
      flex="grow"
      direction="row"
      gap="medium"
    >
      <Image src={thumbnailSrc} />
      <Box align="start" justify="center" direction="column" gap="xsmall">
        <Text size="large" textAlign="start">
          {title}
        </Text>
        <Text textAlign="start" size="small">
          {author}
        </Text>
      </Box>
      <Favorite />
    </Box>
  );
};
