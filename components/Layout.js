import Link from "next/link";
import Head from "next/head";
import { Box, Flex } from "@chakra-ui/react";

export const Layout = (props) => {
  return (
    <div style={{ padding: "5rem" }}>
      <Head>
        <title>Telesis</title>
        <meta
          name="description"
          content="Telesis - Actively shaping the future"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex gap={6}>
        <Link href="/">
          <Box as='a' fontSize={'xl'}>Home</Box>
        </Link>
        <Link href="/posts">
          <Box as='a' fontSize={'xl'}>Posts</Box>
        </Link>
      </Flex>
      <main>{props.children}</main>
    </div>
  );
};
