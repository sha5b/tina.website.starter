import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { chakra, Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";

const Img = chakra(Image, {
  shouldForwardProp: (prop) =>
    ["width", "height", "src", "alt", "layout"].includes(prop),
});

export const HeroBlock = ({ block, id, i }) => {
  return (
    <Box pt={"2rem"}>
      <Grid
        templateColumns={"1fr 1fr 1fr 1fr"}
        templateRows={"0.2fr 1fr 0.2fr"}
        gap={5}
      >
        <GridItem rowSpan={2} colSpan={2}>
          <Box pt={"5rem"}>
            <Heading fontSize={"6xl"}>{block.title}</Heading>
            <Text fontSize={"3xl"}>{block.subtitle}</Text>
          </Box>
        </GridItem>
        {block.image && (
          <GridItem rowSpan={3} colSpan={2} >
            <Link href="posts/">
              <Box p={"1.5rem"} bg={"orangebiz.100"}>
                <Box pos="relative" width="720" height="500">
                  <Img
                    quality="100"
                    layout="fill"
                    objectFit="cover"
                    rounded={"1.5rem"}
                    src={block.image}
                    alt={block.title}
                  />
                </Box>
              </Box>
            </Link>
          </GridItem>
        )}
      </Grid>
    </Box>
  );
};

// Problems to solve: I have fatal error when i leave the width and height values to 0 in the tina cms form. i nee to solve this

/*

  Fatal crash when Field is deleted - this is a part solution
  i dont understand how to use this to my case
  need more research

  const [height, setCount] = useState(0);

  useEffect(() =>{

    if (!block.imageheight) {
      (block.imageheight = 100);
    }
    if (!block.imagewidth) {
      (block.imagewidth = 100);
    }
  })

*/
