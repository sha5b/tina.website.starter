import { Grid, GridItem, Heading, Text, Box } from "@chakra-ui/react";

export const FactBlock = ({ block, id, i }) => {
  return (
    <Grid
      templateColumns={"repeat(6, 1fr)"}
      gap={5}
      mt={"1.5rem"}
      mb={"1.5rem"}
      autoRows={"auto"}
      autoColumns={"auto"}
    >
      {block.fact?.map((item) => {
        return (
          <GridItem colStart={item?.x} colEnd={item?.width} zIndex={-i} >
            {item && (
              <Box p={'3rem'} bg={'whitecuba.100'}>
                <Heading textAlign={"center"} fontSize="3xl" >{item.headline}</Heading>
                <Text textAlign={"center"} fontSize="lg" >{item.subheadline}</Text>
              </Box>
            )}
          </GridItem>
        );
      })}
    </Grid>
  );
};
