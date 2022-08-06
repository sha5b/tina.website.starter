import { staticRequest } from "tinacms";
import { Layout } from "../../components/Layout";
import Image from "next/image";
import { useTina } from "tinacms/dist/edit-state";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  chakra,
  Heading,
  Text,
  Divider,
} from "@chakra-ui/react";
// Block Import
import { HeroBlock } from "../../components/blocks/HeroBlock";
import { CallToActionBlock } from "../../components/blocks/CallToActionBlock";
import { QuoteBlock } from "../../components/blocks/QuoteBlock";
import { GalleryBlock } from "../../components/blocks/GalleryBlock";
import { FactBlock } from "../../components/blocks/FactBlock";
import { LogoBlock } from "../../components/blocks/LogoBLock";
import { FeaturedPostBlock } from "../../components/blocks/FeaturedPostBlock";
import { CardBlock } from "../../components/blocks/CardBlock";
import { RichTextBlock } from "../../components/blocks/RichTextBlock";
// End

const query = `
  query getPost($relativePath: String!) {
    post(relativePath: $relativePath) {
      id
      title
      category
      date
      description
      size
      image
    }
    postConnection {
      edges {
        node {
          _sys {
            filename
          }
          title
          category
          date
          description
          image
        }
      }
    }
  }
`;

const Img = chakra(Image, {
  shouldForwardProp: (prop) =>
    ["width", "height", "src", "alt", "layout"].includes(prop),
});

export default function Home(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query,
    variables: props.variables,
    data: props.data,
  });

  const id = data.post.id;
  const posts = data.postConnection.edges;
  return (
    <Layout>
      <Divider mb={"3rem"} />
      <Box>
        <Text pb={"1rem"}>{data.post.category}</Text>
        <Heading>{data.post.title}</Heading>
      </Box>
      <Divider mb={"3rem"} mt={"1.5rem"} />
      <Grid
        autoRows={"auto"}
        autoColumns={"auto"}
        autoFlow={"dense"}
        templateColumns={`repeat(${data.post.size}, 1fr)`}
        gap={5}
      >
        <GridItem>
          <Box>
            <Text textAlign={"justify"}>{data.post.description}</Text>
          </Box>
        </GridItem>
        {data.post.image && (
          <GridItem>
            <Img
              quality="100"
              width={"100%"}
              height={"100%"}
              layout={"responsive"}
              objectFit="cover"
              src={data.post.image}
              alt={data.post.title}
            />
          </GridItem>
        )}
      </Grid>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const postsResponse = await staticRequest({
    query: `{
        postConnection {
          edges {
            node {
              _sys {
                filename
              }
            }
          }
        }
      }`,
    variables: {},
  });
  const paths = postsResponse.postConnection.edges.map((x) => {
    return { params: { slug: x.node._sys.filename } };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (ctx) => {
  const variables = {
    relativePath: ctx.params.slug + ".mdx",
  };
  let data = {};
  try {
    data = await staticRequest({
      query,
      variables,
    });
  } catch (error) {
    console.log(error);
    // swallow errors related to document creation
  }

  return {
    props: {
      data,
      variables,
    },
  };
};
