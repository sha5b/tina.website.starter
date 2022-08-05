import { staticRequest } from "tinacms";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/uploads/Logos/Telesis_Logo_black_nospace.svg";
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

const Img = chakra(Image, {
  shouldForwardProp: (prop) =>
    ["width", "height", "src", "alt", "layout"].includes(prop),
});

export const Navbar = (props) => {
  {
    console.log(props);
  }
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  return (
    <Box p={"1rem"}>
      <Flex  justify="space-between">
        <Box as="a" fontSize={"xl"} color={"whitecuba.100"}>
          <Link href="/">
            <Img
              quality="100"
              width={"150"}
              height={"50"}
              objectFit="contain"
              src={Logo}
              alt={"Telesis Logo"}
            />
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch("https://.../post/");
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
