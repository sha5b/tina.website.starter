import { chakra, Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export const RichtextBlock = ({ block, id, i }) => {
  return (
    <Box >
      <TinaMarkdown content={block.body}/>
    </Box>
  );
};
