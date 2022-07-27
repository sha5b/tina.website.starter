import Image from "next/image";
import { Box } from "@chakra-ui/react";

export const HeroBlock = ({ block, id, i }) => {
  return (
    <Box key={id + i}>
      <div>{block.title}</div>
      <div>{block.subtitle}</div>
      {block.image && (
        <Image
          width="500"
          height="100%"
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
