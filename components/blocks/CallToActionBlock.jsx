import Link from "next/link";
import { Grid, GridItem, Box,Flex, Heading, Text, Button } from "@chakra-ui/react";

export const CallToActionBlock = ({ block, id, i }) => {
  return (
    <Grid>
      <GridItem>
      <Heading fontSize={"5xl"}>{block.title}</Heading>
      <Text fontSize={"2xl"}>{block.subtitle}</Text>
      {block.button && (
        <Link href={block.button.href ?? "/"}>
          <Button fontSize={"lg"} p={"2rem"}>
            {block.button.label}
          </Button>
        </Link>
      )}
      </GridItem>
    </Grid>
  );
};
