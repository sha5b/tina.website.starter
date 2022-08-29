import { staticRequest } from "tinacms";
import { Layout } from "../../components/Layout";
import { useTina } from "tinacms/dist/edit-state";
import React, { useState } from "react";
import { Box, Flex, Heading, Text, chakra } from "@chakra-ui/react";
import Map, {
  NavigationControl,
  GeolocateControl,
  FullscreenControl,
  ScaleControl,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const query = `query getMap($relativePath: String!) {
  map(relativePath: $relativePath) {
    date
    long
    lat
    bearing
    pitch
  }
  postConnection {
    edges {
      node {
        _sys {
          filename
        }
        title
        category
        tags
        date
        description
        image
      }
    }
  }
}
`;

export default function Home(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <Layout {...props}>
      <Box mt={"2rem"} mb={"2rem"}>
        <Box pos={"relative"} w={"100%"} h={"800px"}>
          <Map
            initialViewState={{
              latitude: 47.65,
              longitude: 9,
              zoom: 15,
              maxZoom: 18,
              minZoom: 7,
              pitch: 25,
              bearing: 0,
            }}
            doubleClickZoom={false}
            scrollZoom={false}
            touchZoom={false}
            mapStyle="https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json"
            mapboxAccessToken={process.env.mapbox_key}
          >
            <GeolocateControl />
            <FullscreenControl />
            <NavigationControl />
            <ScaleControl />
          </Map>
        </Box>
      </Box>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const postsResponse = await staticRequest({
    query: `{
        mapConnection {
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
  const paths = postsResponse.mapConnection.edges.map((x) => {
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
