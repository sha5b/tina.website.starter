import Link from "next/link";
import Head from "next/head";
import { Box, Flex, Container } from "@chakra-ui/react";

export const Layout = (props) => {
  return (
    <Box p={"5rem"} bg={"whitecuba.100"}>
      <Head>
        <title>Telesis</title>
        <meta
          name="description"
          content="Telesis - Actively shaping the future"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex p={"1rem"} justify="space-between" bg={"blacksuite.100"}>
        <Link href="/">
          <Box as="a" fontSize={"xl"} color={"whitecuba.100"}>
            Home
          </Box>
        </Link>
        <Link href="/posts">
          <Box as="a" fontSize={"xl"} color={"whitecuba.100"}>
            Posts
          </Box>
        </Link>
      </Flex>
      <main>{props.children}</main>
    </Box>
  );
};

/* 
  <Flex p={'1rem'} justify='space-between' bg={'blacksuite.100'}>
    <Link href="/">
      <Box as='a' fontSize={'xl'} color={'whitecuba.100'}>Home</Box>
    </Link>
    <Link href="/posts">
      <Box as='a' fontSize={'xl'} color={'whitecuba.100'}>Posts</Box>
    </Link>
  </Flex>
*/
