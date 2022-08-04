import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { chakra, Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";

const Img = chakra(Image, {
  shouldForwardProp: (prop) =>
    ["width", "height", "src", "alt", "layout"].includes(prop),
});

export const CardBlock = ({ block, id, i }) => {
  return (
    <Box>
    </Box>
  );
};
