import { Box, Heading, Text } from "@chakra-ui/react";

export const QuoteBlock = ({ block, id, i }) => {
  return (
    <Box key={id + i}>
      <Heading fontSize="5xl">
        {block.quote}
      </Heading>
      {block.author && 
      <Text fontSize="3xl">
        - "{block.author}"
      </Text>}
    </Box>
  );
};
