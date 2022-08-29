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
    h1: (props) => <Heading as="h1"  color={bgColor(category)} fontSize="5xl" my={2} {...props} />,
    h2: (props) => <Heading as="h2"  color={bgColor(category)} fontSize="4xl" my={2} {...props} />,
    h3: (props) => <Heading as="h3"  color={bgColor(category)} fontSize="3xl" my={2} {...props} />,
    h4: (props) => <Heading as="h4"  color={bgColor(category)} fontSize="2xl" my={2} {...props} />,
    h5: (props) => <Heading as="h5"  color={bgColor(category)} fontSize="xl" my={2} {...props} />,
    h6: (props) => <Heading as="h6"  color={bgColor(category)} fontSize="lg" my={2} {...props} />,
    li: (props) => <Box as="li"  color={bgColor(category)} fontSize="lg" my={2} mx={4} {...props} />,
    ul: (props) => <Box as="ul"  color={bgColor(category)} fontSize="lg" my={2} mx={4} {...props} />,
    ol: (props) => <Box as="ol"  color={bgColor(category)} fontSize="lg" my={2} mx={4} {...props} />,
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
        <Text
          my={2}
          fontSize="md"
          letterSpacing={"wide"}
          textAlign={"justify"}
          {...props}
        />
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
        />
      );
    },

    callout: (props) => {
      if (!props.message) {
        return null;
      }
      return (
        <Box>
          <Button
            rounded={"none"}
            bg={bgColor(category)}
            color={textColor(category)}
            p={'1.5rem'}
          >
            <a href={`${props.href}`}>{props.message}</a>
          </Button>
        </Box>
      );
    },
  };

  return (
    <Box>
      <Grid
        templateColumns={"repeat(6, 1fr)"}
        autoRows={"auto"}
        autoColumns={"auto"}
        gap={5}
      >
        <GridItem colStart={block?.x} colSpan={block?.width}>
          <TinaMarkdown content={block.body} components={components} />
        </GridItem>
      </Grid>
    </Box>
  );
};
