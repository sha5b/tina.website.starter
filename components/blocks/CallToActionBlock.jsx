import Link from "next/link";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button
} from "@chakra-ui/react";
import { bgColor, textColor, animationDuration, animationHidden, animationVisible } from "../Theme";
import { motion } from "framer-motion";

export const CallToActionBlock = ({ block, category, id, i }) => {
  return (
    <Flex
      as={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: animationDuration }}
      variants={{
        visible: animationVisible,
        hidden: animationHidden
      }}
      pt={"3rem"}
      pb={"3rem"}
      mb={"3rem"}
      mt={"3rem"}
      direction={"column"}
      gap={15}
      align={"center"}
      bg={bgColor(category)}
    >
      <Box p={"1.5rem"}>
        <Heading
          textAlign={"center"}
          color={textColor(category)}
          fontSize={"5xl"}
        >
          {block.title}
        </Heading>
        <Text
          textAlign={"center"}
          color={textColor(category)}
          fontSize={"2xl"}
          pl={"1.5rem"}
          pr={"1.5rem"}
        >
          {block.subtitle}
        </Text>
      </Box>
      {block.button && (
        <Box>
          <Link href={block.button.href ?? " "}>
            <Button
              fontSize={"lg"}
              p={"2rem"}
              textAlign={"center"}
              color={bgColor(category)}
              bg={textColor(category)}
              rounded={"none"}
            >
              {block.button.label}
            </Button>
          </Link>
        </Box>
      )}
    </Flex>
  );
};
