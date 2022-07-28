import Image from "next/image";
import { chakra, Box, Flex, Heading, Text } from "@chakra-ui/react";

const Img = chakra(Image, {
  shouldForwardProp: (prop) =>
    ["width", "height", "src", "alt", "layout"].includes(prop),
});

export const HeroBlock = ({ block, id, i }) => {
  return (
    <Flex key={id + i}>
      <Box>
        <Heading fontSize={'8xl'}>{block.title}</Heading>
        <Text fontSize={'5xl'}>{block.subtitle}</Text>
      </Box>
      {block.image && (
        <Box bg={"orangebiz.100"}>
          <Box p={'1.5rem'}>
            <Img
              width="560"
              height="560"
              quality="100"
              pos='relative'
              objectFit="cover"
              rounded={'1rem'}
              src={block.image}
              alt={block.title}
            />
          </Box>
        </Box>
      )}
    </Flex>
  );
};
