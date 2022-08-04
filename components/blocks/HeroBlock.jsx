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
        autoRows={'auto'}
        gap={5}
        pos={'relative'}
      >
        <GridItem
        bg={'rgba(231, 232, 233, 0.25)'}
          zIndex={1}
          colStart={block.position?.text.x}
          colSpan={block.position?.text.width}
          rowStart={block.position?.text.y}
          rowSpan={block.position?.text.height}
          pos={'relative'}
        >
          <Box p={"1.5rem"}>
            <Heading fontSize={"5xl"}>{block.title}</Heading>
            <Text fontSize={"3xl"}>{block.subtitle}</Text>
          </Box>
        </GridItem>
        {block.image && (
          <GridItem
            colStart={block.position?.image?.x ?? 1}
            colSpan={block.position?.image?.width?? 1}
            rowStart={block.position?.image?.y ?? 1}
            rowSpan={block.position?.image?.height ?? 1}
            pos="relative"
          >
              <Img
                zIndex={0}
                quality="100"
                width={'100%'}
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
