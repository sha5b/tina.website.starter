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
} from "deck.gl";
import { StaticMap, MapContext, NavigationControl } from "react-map-gl";

import {} from 'deck.gl';
import {} from 'mapbox-gl';

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
  const INITIAL_VIEW_STATE = {
    latitude: 47.4504823,
    longitude: 9.830742,
    zoom: 15,
    bearing: 25,
    pitch: 25,
  };
  const baseLayer = new TileLayer({
    // https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames#Tile_servers
    data: "https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png",

    minZoom: 0,
    maxZoom: 20,
    tileSize: 256,

    renderSubLayers: (props) => {
      const {
        bbox: { west, south, east, north },
      } = props.tile;

      return new BitmapLayer(props, {
        data: null,
        image: props.data,
        bounds: [west, south, east, north],
      });
    },
  });

  const pointLayer = new TileLayer({
    // https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames#Tile_servers
    data: "https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.png",

    minZoom: 0,
    maxZoom: 20,
    tileSize: 256,
    

    renderSubLayers: (props) => {
      const {
        bbox: { west, south, east, north },
      } = props.tile;

      return new BitmapLayer(props, {
        data: null,
        image: props.data,
        bounds: [west, south, east, north],
      });
    },
  });

  return (
    <Layout {...props}>
      <Box mt={"2rem"} mb={"2rem"}>
        <Box pos={"relative"} w={"100%"} h={"800px"}>
          <DeckGL
            controller={true}
            initialViewState={INITIAL_VIEW_STATE}
            layers={[pointLayer, baseLayer ]}
          ></DeckGL>
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
