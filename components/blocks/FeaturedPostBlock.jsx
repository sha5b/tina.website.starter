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
    <Box mt={"3rem"} mb={"3rem"}>
      <Heading fontSize={"5xl"} textAlign={"center"}>
        {block.category}
      </Heading>
      <Grid
        gap={5}
        pt={"1.5rem"}
        pb={"1.5rem"}
        templateColumns={`repeat(${block.size}, 1fr)`}
        pos={"relative"}
      >
        {posts?.map((post) => {
          return (
            <Box pos={"relative"}>
              {post.node.category == `${block.category}` && (
                <>
                  <GridItem
                    zIndex={1}
                    p={"2rem"}
                    pt={'3rem'}
                    width={'100%'}
                    pos={'absolute'}
                    m={'auto'}
                  >
                    <Text fontSize={"sm"} textAlign={'center'}>{post.node.date}</Text>
                    <Heading fontSize={"lg"} textAlign={'center'}>{post.node.title}</Heading>
                  </GridItem>
                  {post.node.image && (
                    <GridItem cursor={'pointer'}>
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
    </Box>
  );
};
