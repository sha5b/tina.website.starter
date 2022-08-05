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
} from "@chakra-ui/react";

const query = `query getPost($relativePath: String!) {
  post(relativePath: $relativePath) {
    title
    category
    date
    description
    image
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

  return (
    <Layout>
      <Grid autoRows={"auto"} autoColumns={"auto"} autoFlow={"dense"} templateColumns={"repeat(3, 1fr)"} gap={5}>
        <GridItem>
          <Box>
            <Heading>{data.post.title}</Heading>
            <Text>{data.post.category}</Text>
            <Text>{data.post.description}</Text>
          </Box>
        </GridItem>
        {data.post.image && (
          <GridItem>
            <Img
              rounded={"1.5rem"}
              quality="100"
              width={"100%"}
              height={'100%'}
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
