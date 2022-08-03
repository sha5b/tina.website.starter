import Image from "next/image";
import { Box, Flex, Grid, GridItem, chakra } from "@chakra-ui/react";
import Link from "next/link";

const Img = chakra(Image, {
  shouldForwardProp: (prop) =>
    ["width", "height", "src", "alt", "layout"].includes(prop),
});

export const FeaturedPostBlock = ({ block, posts, id, i }) => {
  return (
    <Grid
      gap={5}
      pt={"1.5rem"}
      pb={"1.5rem"}
      autoRows={"auto"}
      autoColumns={"auto"}
      templateColumns={`repeat(${block.size}, 1fr)`}
    >
      {posts?.map((post) => {
        return (
          <GridItem>
            {post.node.category == `${block.category}` && (
              <Box>
                <Box zIndex={1} pos={"absolute"}>
                  <div>{post.node.title}</div>
                  <div>{post.node.category}</div>
                  <div>{post.node.date}</div>
                  <div>{post.node.description}</div>
                </Box>
                {post.node.image && (
                  <Link href={`/posts/${post.node._sys?.filename ?? " "}`}>
                    <Box
                      p={"1.5rem"}
                      bg={"orangebiz.100"}
                      display={"block"}
                      zIndex={0}
                    >
                      <Img
                        rounded={"1.5rem"}
                        quality="100"
                        width={"100%"}
                        height={"100%"}
                        layout={"responsive"}
                        objectFit="cover"
                        src={post.node.image}
                        alt={post.node.title}
                      />
                    </Box>
                  </Link>
                )}
              </Box>
            )}
          </GridItem>
        );
      })}
    </Grid>
  );
};
