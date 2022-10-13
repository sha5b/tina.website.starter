import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import {
  bgColor,
  textColor,
  animationDuration,
  animationHidden,
  animationVisible
} from "../../components/Theme";
import { motion } from "framer-motion";

export const QuoteBlock = ({ block, category, id, i }) => {
  return (
    <Box
      mt={"2rem"}
      mb={"2rem"}
      as={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: animationDuration }}
      variants={{
        visible: animationVisible,
        hidden: animationHidden
      }}
    >
      <Grid
        bg={bgColor(category)}
        p={"2rem"}
        mt={"1rem"}
        templateColumns={"1fr 1fr 1fr 1fr"}
        autoRows={"auto"}
        autoColumns={"auto"}
        gap={5}
      >
        <GridItem colStart={block?.x} colEnd={block?.width}>
          <Heading
            textAlign={"justify"}
            color={textColor(category)}
            fontSize="4xl"
          >
            "{block.quote}"
          </Heading>
          {block.author && (
            <Text pt={"1.5rem"} color={textColor(category)} fontSize="3xl">
              - {block.author}
            </Text>
          )}
        </GridItem>
      </Grid>
    </Box>
  );
};
