import Link from "next/link";
import {
  Grid,
  GridItem,
  Box,
  Flex,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import { bgColor, textColor } from "../Theme";

export const CallToActionBlock = ({ block, category, id, i }) => {
  return (
    <Flex
      pt={"3rem"}
      pb={"3rem"}
      mb={"3rem"}
      mt={"3rem"}
      direction={"column"}
      gap={"3rem"}
      align={"center"}
      bg={bgColor(category)}
    >
      <Box>
        <Heading
          textAlign={"center"}
          color={textColor(category)}
          fontSize={"5xl"}
        >
          {block.title}
        </Heading>
        <Text textAlign={"center"} color={textColor(category)} fontSize={"2xl"}>
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
