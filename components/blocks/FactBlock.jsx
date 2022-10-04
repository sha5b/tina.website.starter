import { Grid, GridItem, Heading, Text, Box } from "@chakra-ui/react";
import { bgColor, textColor } from "../Theme";
import { motion } from "framer-motion";

export const FactBlock = ({ block,category, id, i }) => {
  return (
    <Grid
      templateColumns={"repeat(6, 1fr)"}
      gap={5}
      mt={"1.5rem"}
      mb={"1.5rem"}
      autoRows={"auto"}
      autoColumns={"auto"}
      as={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, y: 0},
        hidden: { opacity: 0, y: 50},
      }}
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
