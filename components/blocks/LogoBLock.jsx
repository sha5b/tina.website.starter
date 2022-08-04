import Image from "next/image";
import {
  Grid,
  GridItem,
  Heading,
  Text,
  Box,
  Flex,
  chakra,
} from "@chakra-ui/react";

const Img = chakra(Image, {
  shouldForwardProp: (prop) =>
    ["width", "height", "src", "alt", "layout"].includes(prop),
});

export const LogoBlock = ({ block, id, i }) => {
  return (
    <Box mt={"3rem"} mb={"3rem"}>
      <Heading textAlign={"center"} fontSize="3xl" pb={"3rem"}>
        {block.headline}
      </Heading>
      <Flex justify={"space-evenly"} gap={"1.5rem"} wrap={'wrap'}>
        {block.logos?.map((item) => {
          return (
            <Box>
              {item.logo && (
                <a href={item?.href ?? "/"}>
                  <Box display={'block'}>
                    <Img
                      width="250"
                      height="100%"
                      quality="100"
                      objectFit='contain'
                      src={item.logo}
                      alt={"Logo"}
                    />
                  </Box>
                </a>
              )}
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};
