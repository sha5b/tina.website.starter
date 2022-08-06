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

const query = `query getPost($relativePath: String!) {
  post(relativePath: $relativePath) {
    id
    title
    category
    date
    description
    size
    image
    blocks {
      ... on PostBlocksHero {
        title
        subtitle
        image
        position {
          image {
            height
            width
            x
            y
          }
          text {
            height
            width
            x
            y
          }
        }
      }
      ... on PostBlocksCta {
        title
        subtitle
      }
      ... on PostBlocksQuote {
        quote
        author
        width
        x
      }
      ... on PostBlocksGallery {
        __typename
        gallery {
          alt
          height
          image
          width
          x
        }
      }
      ... on PostBlocksFact {
        __typename
        fact {
          headline
          subheadline
          width
          x
        }
      }
      ... on PostBlocksLogos {
        headline
        logos {
          alt
          href
          logo
        }
      }
      ... on PostBlocksCard {
        __typename
        cards {
          body
          href
          title
          width
          x
        }
      }
      ... on PostBlocksFeatured {
        category
        size
      }
      ... on PostBlocksRichtext {
        body
      }
    }
  }
  postConnection {
    edges {
      node {
        _sys{
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
      <Divider mb={"3rem"} mt={'1.5rem'}/>
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
        {data.post
          ? data.post.blocks?.map((block, i) => {
              switch (block.__typename) {
                case "PostBlocksHero":
                  return (
                    <GridItem>
                      <HeroBlock id={id} i={i} block={block} />
                    </GridItem>
                  );
                case "PostBlocksCta":
                  return (
                    <Box>
                      <CallToActionBlock id={id} i={i} block={block} />
                    </Box>
                  );
                case "PostBlocksQuote":
                  return (
                    <GridItem>
                      <QuoteBlock id={id} i={i} block={block} />
                    </GridItem>
                  );
                case "PostBlocksGallery":
                  return (
                    <GridItem>
                      <GalleryBlock id={id} i={i} block={block} />
                    </GridItem>
                  );
                case "PostBlocksFact":
                  return (
                    <GridItem>
                      <FactBlock id={id} i={i} block={block} />
                    </GridItem>
                  );
                case "PostBlocksLogos":
                  return (
                    <GridItem>
                      <LogoBlock id={id} i={i} block={block} />
                    </GridItem>
                  );
                case "PostBlocksFeatured":
                  return (
                    <GridItem>
                      <FeaturedPostBlock
                        id={id}
                        i={i}
                        block={block}
                        posts={posts}
                      />
                    </GridItem>
                  );
                case "PostBlocksCard":
                  return (
                    <GridItem>
                      <CardBlock i={i} block={block} />
                    </GridItem>
                  );
                case "PostBlocksRichtext":
                  return (
                    <GridItem>
                      <RichTextBlock i={i} block={block} />
                    </GridItem>
                  );
              }
            })
          : null}
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
