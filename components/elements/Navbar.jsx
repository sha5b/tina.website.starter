import { staticRequest } from "tinacms";
import Link from "next/link";
import { useTina } from "tinacms/dist/edit-state";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  chakra,
  Heading,
  Text,
} from "@chakra-ui/react";

export const Navbar = (props, post) => {
  {
    console.log(post);
  }
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  return (
    <Flex p={"1rem"} justify="space-between" bg={"blacksuite.100"}>
      <Link href="/">
        <Box as="a" fontSize={"xl"} color={"whitecuba.100"}>
          Home
        </Box>
      </Link>
    </Flex>
  );
};

export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch('https://.../post/');
  const post = await res.json();

  // Pass post data to the page via props
  return { props: { post } };
}

/*

        <div>
        {postsList.map((post) => (
          <div key={post.node.id}>
            <Link href={`/posts/${post.node._sys.filename}`}>
              <a>{post.node._sys.filename}</a>
            </Link>
          </div>
        ))}
      </div>

      */
