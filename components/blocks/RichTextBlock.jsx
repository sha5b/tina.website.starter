import {
  chakra,
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  Divider,
  Button,
} from "@chakra-ui/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Image } from "@chakra-ui/react";
import Link from "next/link";
import {
  bgColor,
  category,
  categoryHref,
  textColor,
} from "../../components/Theme";

export const RichtextBlock = ({ block, category, id, i }) => {
  const components = {
    h1: (props) => (
      <Heading
        as="h1"
        color={bgColor(category)}
        fontSize="5xl"
        pb={"0.75rem"}
        {...props}
      />
    ),
    h2: (props) => (
      <Heading
        as="h2"
        color={bgColor(category)}
        fontSize="4xl"
        pb={"0.75rem"}
        {...props}
      />
    ),
    h3: (props) => (
      <Heading
        as="h3"
        color={bgColor(category)}
        fontSize="3xl"
        pb={"0.75rem"}
        {...props}
      />
    ),
    h4: (props) => (
      <Heading
        as="h4"
        color={bgColor(category)}
        fontSize="2xl"
        pb={"0.75rem"}
        {...props}
      />
    ),
    h5: (props) => (
      <Heading
        as="h5"
        color={bgColor(category)}
        fontSize="xl"
        pb={"0.75rem"}
        {...props}
      />
    ),
    h6: (props) => (
      <Heading
        as="h6"
        color={bgColor(category)}
        fontSize="lg"
        pb={"0.75rem"}
        {...props}
      />
    ),
    li: (props) => <Box as="li" fontSize="lg" py={2} px={4} {...props} />,
    ul: (props) => <Box as="ul" fontSize="lg" py={2} px={4} {...props} />,
    ol: (props) => <Box as="ol" fontSize="lg" py={2} px={4} {...props} />,
    a: (props) => {
      return <Link href={props.href}>{props.children}</Link>;
    },
    code: (props) => {
      return (
        <Code fontSize="lg" my={2}>
          {props.children}
        </Code>
      );
    },
    hr: (props) => {
      return <Divider mb={"1.5rem"} {...props} />;
    },
    p: (props) => {
      return (
        <Box>
          <Text
            color={textColor(category)}
            fontSize="lg"
            letterSpacing={"wide"}
            textAlign={"justify"}
            {...props}
            pt={"0.5rem"}
            pb={"0.75rem"}
          />
        </Box>
      );
    },
    img: (props) => {
      const Img = chakra(Image, {
        shouldForwardProp: (prop) =>
          ["width", "height", "src", "alt", "layout", "fill"].includes(prop),
      });
      return (
        <Img
          mx="auto"
          src={props.url ? props.url : "/"}
          height={"500"}
          width="100%"
          alt={props.alt}
          objectFit="cover"
          quality="100"
          rounded={"1.5rem"}
          {...props}
        />
      );
    },

    callout: (props) => {
      if (!props.message) {
        return null;
      }
      return (
        <Box textAlign={"center"} pt={"1.5rem"} pb={"1.5rem"}>
          <Button
            as="h5"
            fontSize={"xl"}
            size={"lg"}
            rounded={"none"}
            bg={bgColor(category)}
            color={textColor(category)}
            p={"1.5rem"}
            {...props}
          >
            <a href={`${props.href}`}>{props.message}</a>
          </Button>
        </Box>
      );
    },
  };

  return (
    <Box pt={"2rem"} pb={"2rem"}>
      <Grid
        templateColumns={"repeat(6, 1fr)"}
        autoRows={"auto"}
        autoColumns={"auto"}
        gap={25}
      >
        {block.textblock?.map((textitem) => {
          return (
            <GridItem colStart={textitem?.x} colSpan={textitem?.width}>
              <TinaMarkdown content={textitem.body} components={components} />
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};
