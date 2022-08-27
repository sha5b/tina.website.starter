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
} from "deck.gl";
import { StaticMap, MapContext, NavigationControl } from "react-map-gl";

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
// "https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png",
const COUNTRIES =
  "https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_scale_rank.geojson"; //eslint-disable-line
const AIR_PORTS =
  "https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_airports.geojson";

const INITIAL_VIEW_STATE = {
  latitude: 47.4504823,
  longitude: 9.830742,
  zoom: 5,
  bearing: 25,
  pitch: 25,
};

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
          <DeckGL initialViewState={INITIAL_VIEW_STATE}>
            <NavigationControl/>
            <GeoJsonLayer
              id="base-map"
              data={COUNTRIES}
              stroked={true}
              filled={true}
              lineWidthMinPixels={2}
              opacity={0.4}
              getLineColor={[60, 60, 60]}
              getFillColor={[200, 200, 200]}
            />
            <GeoJsonLayer
              id="airports"
              data={AIR_PORTS}
              filled={true}
              pointRadiusMinPixels={2}
              pointRadiusScale={2000}
              getPointRadius={(f) => 11 - f.properties.scalerank}
              getFillColor={[200, 0, 80, 180]}
              pickable={true}
              autoHighlight={true}
            />
            <ArcLayer
              id="arcs"
              data={AIR_PORTS}
              dataTransform={(d) =>
                d.features.filter((f) => f.properties.scalerank < 4)
              }
              getSourcePosition={(f) => [-0.4531566, 51.4709959]}
              getTargetPosition={(f) => f.geometry.coordinates}
              getSourceColor={[0, 128, 200]}
              getTargetColor={[200, 0, 80]}
              getWidth={1}
            />
          </DeckGL>
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
