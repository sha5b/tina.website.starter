import { Divider, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect } from "react";
import {
  chakra,
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  Code,
} from "@chakra-ui/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

const Img = chakra(Image, {
  shouldForwardProp: (prop) =>
    ["width", "height", "src", "alt", "layout"].includes(prop),
});

const components = {
  h1: (props) => (
    <Heading as="h1" fontSize="5xl" my={2} color={"whitecuba.100"} {...props} />
  ),
  h2: (props) => (
    <Heading as="h2" fontSize="4xl" my={2} color={"whitecuba.100"} {...props} />
  ),
  h3: (props) => (
    <Heading as="h3" fontSize="3xl" my={2} color={"whitecuba.100"} {...props} />
  ),
  h4: (props) => (
    <Heading as="h4" fontSize="2xl" my={2} color={"whitecuba.100"} {...props} />
  ),
  h5: (props) => (
    <Heading as="h5" fontSize="xl" my={2} color={"whitecuba.100"} {...props} />
  ),
  h6: (props) => (
    <Heading as="h6" fontSize="lg" my={2} color={"whitecuba.100"} {...props} />
  ),
  li: (props) => (
    <Box
      as="li"
      fontSize="lg"
      my={2}
      mx={4}
      color={"whitecuba.100"}
      {...props}
    />
  ),
  ul: (props) => (
    <Box
      as="ul"
      fontSize="lg"
      my={2}
      mx={4}
      color={"whitecuba.100"}
      {...props}
    />
  ),
  ol: (props) => (
    <Box
      as="ol"
      fontSize="lg"
      my={2}
      mx={4}
      color={"whitecuba.100"}
      {...props}
    />
  ),
  a: (props) => {
    return (
      <Link href={props.href} color={"whitecuba.100"}>
        {props.children}
      </Link>
    );
  },
  code: (props) => {
    return (
      <Code fontSize="lg" my={2}>
        {props.children}
      </Code>
    );
  },
  p: (props) => {
    return (
      <Text
        textAlign={"justify"}
        fontSize="xl"
        color={"whitecuba.100"}
        my={2}
        {...props}
      />
    );
  },
  img: (props) => {
    return (
      <Image
        mx="auto"
        src={props.url}
        height={'inherit'}
        width={'inherit'}
        alt={props.alt}
        objectFit='scale-down'
        quality="100"
        overflow={'hidden'}
      />
    );
  },
  hr: (props) => {
    return <Divider pb={"1.5rem"} />;
  },
};

export const CardBlock = ({ block, id, i }) => {
  return (
    <Grid
      templateColumns={"repeat(6, 1fr)"}
      autoRows={"auto"}
      autoColumns={"auto"}
    >
      {block.cards?.map((item) => {
        return (
          <GridItem
            gap={5}
            colStart={item?.x}
            colSpan={item?.width}
          >
            {item && (
              <Link href={item.href ?? " "}>
                <Box
                  m={"1.5rem"}
                  p={"1.5rem"}
                  bg={"blacksuite.100"}
                  rounded={"1.5rem"}
                >
                  <Heading
                    color={"whitecuba.100"}
                    textAlign={"center"}
                    mb={"1rem"}
                  >
                    {item.title}
                  </Heading>
                  <Divider mb={"1rem"} />
                  <Box w={'100%'} h={'100%'}>
                    <TinaMarkdown content={item.body} components={components} />
                  </Box>
                  <Divider mt={"1rem"} />
                </Box>
              </Link>
            )}
          </GridItem>
        );
      })}
    </Grid>
  );
};
