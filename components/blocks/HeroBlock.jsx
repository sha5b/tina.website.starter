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
    <Box pt={"2rem"} key={id + i}>
      <Grid
        templateColumns={"repeat(6, 1fr)"}
        templateRows={"repeat(6, 1fr)"}
        gap={5}
      >
        <GridItem
        bg={'rgba(231, 232, 233, 0.25)'}
          zIndex={1}
          colStart={block.position?.text.colstart}
          colEnd={block.position?.text.colend}
          rowStart={block.position?.text.rowstart}
          rowEnd={block.position?.text.rowend}
        >
          <Box p={"1.5rem"}>
            <Heading fontSize={"5xl"}>{block.title}</Heading>
            <Text fontSize={"3xl"}>{block.subtitle}</Text>
          </Box>
        </GridItem>
        {block.image && (
          <GridItem
            colStart={block.position?.image?.colstart ?? 1}
            colEnd={block.position?.image?.colend ?? 1}
            rowStart={block.position?.image?.rowstart ?? 1}
            rowEnd={block.position?.image?.rowend ?? 1}
            pos="relative"
          >
              <Img
                zIndex={0}
                quality="100"
                layout={"fill"}
                objectFit="cover"
                rounded={"1.5rem"}
                src={block.image}
                alt={block.title}
              />
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
