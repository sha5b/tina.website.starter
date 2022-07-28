import Image from "next/image";
import { chakra, Box, Heading, Text} from "@chakra-ui/react";

const Img = chakra(Image, {
  shouldForwardProp: (prop) =>
    ["width", "height", "src", "alt", "layout"].includes(prop),
});

export const HeroBlock = ({ block, id, i }) => {
  return (
    <Box key={id + i}>
      <Heading>{block.title}</Heading>
      <Text>{block.subtitle}</Text>
      {block.image && (
        <Img
          zIndex={-1}
          width='1920'
          height='720'
          quality="100"
          pos="relative"
          objectFit="cover"
          src={block.image}
          alt={block.title}
        />
      )}
    </Box>
  );
};
