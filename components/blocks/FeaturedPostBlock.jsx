import Image from "next/image";
import {
  Box,
  Grid,
  GridItem,
  chakra,
  Button
} from "@chakra-ui/react";
import Link from "next/link";
import { textColor, animationDuration, animationHidden, animationVisible } from "../Theme";
import { motion } from "framer-motion";

const Img = chakra(Image, {
  shouldForwardProp: (prop) =>
    ["width", "height", "src", "alt", "layout"].includes(prop)
});

export const FeaturedPostBlock = ({ block, posts, id, i }) => {
  return (
    <Box
      mt={"3rem"}
      mb={"3rem"}
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
      <Box>
        <Button
          p={"2rem"}
          rounded={"none"}
          color={textColor(block.category)}
          bg={block.colors}
          fontSize={"3xl"}
        >
          {block.category}
        </Button>
      </Box>
      <Grid
        pt={"1.5rem"}
        templateColumns={`repeat(${block.size}, 1fr)`}
        gap={25}
      >
        {posts?.map((post) => {
          return (
            <>
              {post.node.category == `${block.category}` && (
                <Box pos={"relative"}>
                  {post.node.image && (
                    <GridItem cursor={"pointer"}>
                      <Link href={`/posts/${post.node._sys?.filename ?? " "}`}>
                        <Box
                          p={`1.5rem`}
                          bg={block.colors}
                          display={"block"}
                          zIndex={0}
                        >
                          <Img
                            bg={textColor(block.category)}
                            rounded={"1.5rem"}
                            quality="100"
                            width={"100%"}
                            height={"100%"}
                            layout={"responsive"}
                            objectFit="cover"
                            objectPosition={"50% 50%"}
                            src={post.node.image}
                            alt={post.node.title}
                          />
                        </Box>
                      </Link>
                    </GridItem>
                  )}
                </Box>
              )}
            </>
          );
        })}
      </Grid>
    </Box>
  );
};

/*

<Text fontSize={"sm"} textAlign={"center"}>
  {post.node.date}
</Text>

 */
