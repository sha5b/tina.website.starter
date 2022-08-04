import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { chakra, Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

const Img = chakra(Image, {
  shouldForwardProp: (prop) =>
    ["width", "height", "src", "alt", "layout"].includes(prop),
});

export const CardBlock = ({ block, id, i }) => {
  return (
    <Grid
    templateColumns={"repeat(6, 1fr)"}
    autoRows={'auto'}
    autoColumns={'auto'}
    >
      {block.cards?.map((item) => {
        return (
          <GridItem>
            {item && (
              <Box p={"1.5rem"} bg={"whitecuba.100"}>
                <Heading>
                  {item.title}
                </Heading>
                <TinaMarkdown content={item.body}/>
              </Box>
            )}
          </GridItem>
        );
      })}
    </Grid>
  );
};
