import { Grid, GridItem, Heading, Text, Box } from "@chakra-ui/react";
import { bgColor, textColor } from "../Theme";

export const FactBlock = ({ block,category, id, i }) => {
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
          <GridItem colStart={item?.x} colSpan={item?.width} zIndex={-i} >
            {item && (
              <Box p={'3rem'} color={bgColor(category)} bg={textColor(category)}>
                <Heading textAlign={"center"} fontSize="3xl" >{item.headline}</Heading>
                <Text textAlign={"center"} fontSize="xl" >{item.subheadline}</Text>
              </Box>
            )}
          </GridItem>
        );
      })}
    </Grid>
  );
};
