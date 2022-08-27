import { staticRequest } from "tinacms";
import { Layout } from "../../components/Layout";
import { useTina } from "tinacms/dist/edit-state";
import React from "react";
import { Box, Flex, Heading, Text, chakra } from "@chakra-ui/react";
import DeckGL, {
  GeoJsonLayer,
  ScatterplotLayer,
  ArcLayer,
  BitmapLayer,
  TileLayer,
  TerrainLayer,
  TextLayer,
  Deck,
  PolygonLayer,
} from "deck.gl";
import MapGL, { StaticMap, MapContext, NavigationControl } from "react-map-gl";

import {} from "deck.gl";
import {} from "mapbox-gl";

const query = `{
    mapConnection {
      edges {
        node {
          id
          _sys {
            filename
          }
        }
      }
    }
  }`;



export default function Home(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <Layout {...props}>
    </Layout>
  );
}

export const getStaticProps = async () => {
  let data = {};
  const variables = {};
  try {
    data = await staticRequest({
      query,
      variables,
    });
  } catch {
    // swallow errors related to document creation
  }

  return {
    props: {
      data,
      //myOtherProp: 'some-other-data',
    },
  };
};
