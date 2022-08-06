import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";

export const QuoteBlock = ({ block, id, i }) => {
  return (
    <Grid
      bg={"blacksuite.100"}
      p={"2rem"}
      mt={"1rem"}
      templateColumns={"1fr 1fr 1fr 1fr"}
      autoRows={"auto"}
      autoColumns={"auto"}
      gap={5}
    >
      <GridItem colStart={block?.x} colEnd={block?.width}>
        <Heading textAlign={"justify"} color={"whitecuba.100"} fontSize="4xl">
          {block.quote}
        </Heading>
        {block.author && (
          <Text pt={"1.5rem"} color={"whitecuba.100"} fontSize="3xl">
            - "{block.author}"
          </Text>
        )}
      </GridItem>
    </Grid>
  );
};
