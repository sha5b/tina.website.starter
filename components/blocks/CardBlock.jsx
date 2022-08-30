import { color, Divider} from "@chakra-ui/react";
import Image from 'next/image'
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
import { bgColor, textColor } from "../Theme";

export const CardBlock = ({ block, id, i }) => {
  const components = {
    h1: (props) => (
      <Heading
        as="h1"
        fontSize="5xl"
        color={"blacksuite.100"}
        p={"1rem"}
        {...props}
      />
    ),
    h2: (props) => (
      <Heading
        as="h2"
        fontSize="4xl"
        color={"blacksuite.100"}
        p={"1rem"}
        {...props}
      />
    ),
    h3: (props) => (
      <Heading
        as="h3"
        fontSize="3xl"
        color={"blacksuite.100"}
        p={"1rem"}
        {...props}
      />
    ),
    h4: (props) => (
      <Heading
        as="h4"
        fontSize="2xl"
        color={"blacksuite.100"}
        p={"1rem"}
        {...props}
      />
    ),
    h5: (props) => (
      <Heading
        as="h5"
        fontSize="xl"
        color={"blacksuite.100"}
        p={"1rem"}
        {...props}
      />
    ),
    h6: (props) => (
      <Heading
        as="h6"
        fontSize="lg"
        color={"blacksuite.100"}
        p={"1rem"}
        {...props}
      />
    ),
    li: (props) => (
      <Box
        as="li"
        fontSize="lg"
        p={"1rem"}
        my={2}
        mx={4}
        color={"blacksuite.100"}
        {...props}
      />
    ),
    ul: (props) => (
      <Box
        as="ul"
        fontSize="lg"
        p={"1rem"}
        my={2}
        mx={4}
        color={"blacksuite.100"}
        {...props}
      />
    ),
    ol: (props) => (
      <Box
        as="ol"
        fontSize="lg"
        p={"1rem"}
        my={2}
        mx={4}
        color={"blacksuite.100"}
        {...props}
      />
    ),
    a: (props) => {
      return (
        <Link href={props.href} color={"blacksuite.100"} p={"1rem"}>
          {props.children}
        </Link>
      );
    },
    code: (props) => {
      return (
        <Code fontSize="lg" p={"1rem"}>
          {props.children}
        </Code>
      );
    },
    p: (props) => {
      return <Text textAlign={"justify"} fontSize="lg" p={"1rem"} {...props} />;
    },
    img: (props) => {
      return (
        <Image
          as="img"
          src={props.url}
          alt={props.alt}
          height={"100%"}
          width="100%"
          layout="responsive"
          objectFit="cover"
          objectPosition={'50% 50%'}
          quality="100"
          rounded={"1.5rem"}
          {...props}
        />
      );
    },
    hr: (props) => {
      return <Divider pb={"1.5rem"} {...props} />;
    },
  };
  return (
    <Grid
      templateColumns={"repeat(6, 1fr)"}
      gap={5}
      autoRows={"auto"}
      autoColumns={"auto"}
      mt={'2rem'}
      mb={'2rem'}
    >
      {block.cards?.map((item) => {
        return (
          <GridItem colStart={item?.x} colSpan={item?.width}>
            {item && (
              <Link href={item.href ?? " "}>
                <Box bg={bgColor(item.category)} p={"2rem"}>
                  <Box rounded={"1.5rem"}>
                    <Heading
                      textAlign={"left"}
                      color={textColor(item.category)}
                    >
                      {item.title}
                    </Heading>
                    <Box color={textColor(item.category)}>
                      <TinaMarkdown
                        content={item.body}
                        components={components}
                      />
                    </Box>
                  </Box>
                </Box>
              </Link>
            )}
          </GridItem>
        );
      })}
    </Grid>
  );
};
