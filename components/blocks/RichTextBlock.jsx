import { chakra, Box, Grid, GridItem, Heading, Text, Divider } from "@chakra-ui/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Image } from "@chakra-ui/react";
import Link from "next/link";

const components = {
  h1: (props) => <Heading as="h1" fontSize="6xl" my={2} {...props} />,
  h2: (props) => <Heading as="h2" fontSize="5xl" my={2} {...props} />,
  h3: (props) => <Heading as="h3" fontSize="4xl" my={2} {...props} />,
  h4: (props) => <Heading as="h4" fontSize="3xl" my={2} {...props} />,
  h5: (props) => <Heading as="h5" fontSize="2xl" my={2} {...props} />,
  h6: (props) => <Heading as="h6" fontSize="xl" my={2} {...props} />,
  li: (props) => <Box as="li" fontSize="xl" my={2} mx={4} {...props} />,
  ul: (props) => <Box as="ul" fontSize="xl" my={2} mx={4} {...props} />,
  ol: (props) => <Box as="ol" fontSize="xl" my={2} mx={4} {...props} />,
  a: (props) => {
    return <Link href={props.href}>{props.children}</Link>;
  },
  code: (props) => {
    return (
      <Code fontSize="xl" my={2}>
        {props.children}
      </Code>
    );
  },
  hr: (props) => {
    return <Divider mb={'1.5rem'}{... props}/>
  },
  p: (props) => {
    return <Text my={2} textAlign={'justify'}{...props} />;
  },
  img: (props) => {
    return (
      <Image
        mx="auto"
        src={props.url}
        height={"500"}
        width="100%"
        alt={props.alt}
        objectFit="cover"
        quality="100"
        placeholder='empty'
      />
    );
  },
};

export const RichtextBlock = ({ block, id, i }) => {
  return (
    <Box >
      <TinaMarkdown content={block.body} components={components}/>
    </Box>
  );
};

