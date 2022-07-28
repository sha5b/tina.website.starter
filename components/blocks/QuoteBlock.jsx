import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";

export const QuoteBlock = ({ block, id, i }) => {
  return (
    <Box pt={"2rem"} key={id + i}>
      <Grid
        templateColumns={"1fr 1fr 1fr 1fr"}
        templateRows={"0.2fr 1fr 0.2fr"}
        gap={5}
      >
        <GridItem rowSpan={2} colSpan={4}>
          <Heading fontSize="5xl">{block.quote}</Heading>
          {block.author && <Text fontSize="3xl">- "{block.author}"</Text>}
        </GridItem>
      </Grid>
    </Box>
  );
};
