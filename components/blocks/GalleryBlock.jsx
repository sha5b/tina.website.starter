import {
  Box,
  Flex,
  Grid,
  GridItem,
  chakra,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Modal,
  ModalBody,
} from "@chakra-ui/react";
import Image from "next/image";

const Img = chakra(Image, {
  shouldForwardProp: (prop) =>
    ["width", "height", "src", "alt", "layout"].includes(prop),
});

import { useDisclosure } from "@chakra-ui/react";

import { bgColor } from "../Theme";
import Link from "next/link";

// TO SOLVE: Image height throws error when value is empty when you retype stuff.

export const GalleryBlock = ({ block, category, id, i }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Grid
      templateColumns={"repeat(6, 1fr)"}
      gap={5}
      pt={"1.5rem"}
      pb={"1.5rem"}
      autoRows={"auto"}
      autoColumns={"auto"}
    >
      {block.gallery?.map((item, i) => {
        return (
          <GridItem colStart={item?.x} colSpan={item?.width} zIndex={-i}>
            {console.log(category)}
            {item.image && (
              <Box
                p={"1.5rem"}
                bg={bgColor(category)}
                display={"block"}
                onClick={onOpen}
              >
                <Img
                  rounded={"1.5rem"}
                  quality="100"
                  width={"100%"}
                  objectPosition={'50% 50%'}
                  height={item?.height ?? "25%"}
                  layout={"responsive"}
                  objectFit="cover"
                  src={item.image}
                  alt={item.alt}
                />
              </Box>
            )}
          </GridItem>
        );
      })}
    </Grid>
  );
};
