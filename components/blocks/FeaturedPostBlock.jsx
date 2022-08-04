import Image from "next/image";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  chakra,
  Heading,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

const Img = chakra(Image, {
  shouldForwardProp: (prop) =>
    ["width", "height", "src", "alt", "layout"].includes(prop),
});

export const FeaturedPostBlock = ({ block, posts, id, i }) => {
  return (
    <>
      {" "}
      <Heading fontSize={"3xl"} textAlign={'center'}>{block.category}</Heading>
      <Grid
        gap={5}
        pt={"1.5rem"}
        pb={"1.5rem"}
        templateColumns={`repeat(${block.size}, 1fr)`}
        pos={'relative'}
      >
        {posts?.map((post) => {
          return (
            <Box pos={'relative'}>
              {post.node.category == `${block.category}` && (
                <>
                  <GridItem zIndex={1} bg={'rgba(231, 232, 233, 0.25)'} p={"3rem"}>
                    <Text fontSize={"sm"}>{post.node.date}</Text>
                    <Heading fontSize={"lg"}>{post.node.title}</Heading>
                    <Text fontSize={"md"}>{post.node.description}</Text>
                  </GridItem>
                  {post.node.image && (
                    <GridItem>
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
                    </GridItem>
                  )}
                </>
              )}
            </Box>
          );
        })}
      </Grid>
    </>
  );
};
