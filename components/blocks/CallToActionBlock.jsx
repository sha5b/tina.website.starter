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

export const CallToActionBlock = ({ block, id, i }) => {
  return (
    <Flex
      pt={"3rem"}
      pb={"3rem"}
      mb={"3rem"}
      mt={"3rem"}
      direction={"column"}
      gap={"3rem"}
      align={"center"}
      bg={"blacksuite.100"}
      rounded={"1.5rem"}
    >
      <Box>
        <Heading textAlign={"center"} color={"whitecuba.100"} fontSize={"5xl"}>
          {block.title}
        </Heading>
        <Text textAlign={"center"} color={"whitecuba.100"} fontSize={"2xl"}>
          {block.subtitle}
        </Text>
      </Box>
      {block.button && (
        <Box>
          <Link href={block.button.href ?? "/"}>
            <Button fontSize={"lg"} p={"2rem"} textAlign={"center"}>
              {block.button.label}
            </Button>
          </Link>
        </Box>
      )}
    </Flex>
  );
};
