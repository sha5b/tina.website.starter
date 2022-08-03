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
        templateColumns={"1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr "}
        templateRows={"33% 33%  33% "}
        gap={5}
      >
        <GridItem
          colStart={block.position?.text.colstart}
          colEnd={block.position?.text.colend}
          rowStart={block.position?.text.rowstart}
          rowEnd={block.position?.text.rowend}
          order={block.position?.text.order}
        >
          <Box pos="relative">
            <Heading fontSize={"6xl"}>{block.title}</Heading>
            <Text fontSize={"3xl"}>{block.subtitle}</Text>
          </Box>
        </GridItem>
        {block.image && (
          <GridItem
            colStart={block.position?.image?.colstart ?? 1}
            colEnd={block.position?.image?.colend ?? 1}
            rowStart={block.position?.image?.rowstart ?? 1}
            rowEnd={block.position?.image?.rowend ?? 1}
            order={block.position?.image?.order ?? 1}
          >
            <Box p={"1.5rem"} bg={"orangebiz.100"} boxShadow={"md"}>
              <Box display={"block"}>
                <Img
                  quality="100"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  objectFit="cover"
                  rounded={"1.5rem"}
                  src={block.image}
                  alt={block.title}
                />
              </Box>
            </Box>
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
