import { staticRequest } from "tinacms";
import Link from "next/link";
import { Layout } from "../../components/Layout";
import Image from "next/image";
import { useTina } from "tinacms/dist/edit-state";
import {
	bgColor,
	category,
	categoryHref,
	textColor,
} from "../../components/Theme";
import {
	Button,
	Box,
	Flex,
	Grid,
	GridItem,
	chakra,
	Heading,
	Text,
	Divider,
	Spacer,
} from "@chakra-ui/react";
// Block Import
import { Hero } from "../../components/blocks/Hero";
import { CallToAction } from "../../components/blocks/CallToAction";
// End

const query = `
  query getPost($relativePath: String!) {
    post(relativePath: $relativePath) {
      id
      title
      category
      tags
      date
      description
      image
      blocks {
        ... on PostBlocksHero {
          __typename
          title
          subtitle
          image
        }
        ... on PostBlocksCta {
          __typename
          title
          subtitle
          button {
            label
            href
          }
        }
      }
    }
    postConnection {
      edges {
        node {
          _sys {
            filename
          }
          title
          category
          tags
          date
          description
          image
        }
      }
    }
  }
`;

const Img = chakra(Image, {
	shouldForwardProp: (prop) =>
		["width", "height", "src", "alt", "layout"].includes(prop),
});

export default function Home(props) {
	// data passes though in production mode and data is updated to the sidebar data in edit-mode
	const { data } = useTina({
		query,
		variables: props.variables,
		data: props.data,
	});

	const posts = data.postConnection?.edges;
	return (
		<Layout {...props}>
			<Heading pt={"4rem"} fontSize={"6xl"} textAlign={"left"}>
				{data.post?.title}
			</Heading>
			<Divider mb={"1.5rem"} mt={"1rem"} />
			<Flex gap={25} align={"end"} justify={"flex-start"}>
				<Box>
					<Flex wrap={"wrap"} align={"end"} justify={"flex-start"} gap={15}>
						<Link href={categoryHref(data.post?.category)}>
							<Button
								p={"2rem"}
								rounded={"none"}
								color={textColor(data.post?.category)}
								bg={bgColor(data.post?.category)}
								fontSize={"1xl"}
							>
								{data.post?.category}
							</Button>
						</Link>
						{data.post?.tags.map((tag) => (
							<Box>
								<Button
									p={"1rem"}
									color={"whitecuba.100"}
									rounded={"none"}
									textAlign={"center"}
									size={"sm"}
									bg={"blacksuite.100"}
								>
									{tag}
								</Button>
							</Box>
						))}
					</Flex>
				</Box>
				<Spacer />
				<Box w={"15%"}>
					{data.post?.image && (
						<Box p={"1.5rem"} bg={bgColor(data.post?.category)} display={"block"}>
							<Img
								bg={textColor(data.post?.category)}
								rounded={"1.5rem"}
								quality="100"
								width={"100%"}
								height={"100%"}
								layout={"responsive"}
								objectFit="cover"
								src={data.post.image}
								alt={data.post.title}
							/>
						</Box>
					)}
				</Box>
				<Box w={"25%"}>
					<Text fontSize="sm" fontWeight={"thin"} textAlign={"justify"}>
						{data.post?.description}
					</Text>
				</Box>
			</Flex>
			<Divider mb={"3rem"} mt={"1.5rem"} />
			<Grid
				templateColumns={"repeat(2, 1fr)"}
				gap={5}
				y
				pt={"1.5rem"}
				pb={"1.5rem"}
				autoRows={"auto"}
				autoColumns={"auto"}
			>
				{data.post
					? data.post.blocks?.map((block, i) => {
							switch (block.__typename) {
								case "PostBlocksHero":
									return (
										<GridItem>
											<Hero i={i} block={block} category={data.post?.category} />
										</GridItem>
									);
								case "PostBlocksCta":
									return (
										<GridItem>
											<CallToAction i={i} block={block} category={data.post?.category} />
										</GridItem>
									);
							}
					  })
					: null}
			</Grid>
			<Box>
				<Flex wrap={"wrap"}>
					<Box pt={"2rem"}>
						<Button
							p={"2rem"}
							rounded={"none"}
							bg={bgColor(data.post?.category)}
							color={textColor(data.post?.category)}
							fontSize={"3xl"}
						>
							Related Articles
						</Button>
						<Flex wrap={"wrap"}>
							{posts?.map((node) => {
								return (
									<Box>
										{node.node.category === data.post?.category && (
											<>
												<Box
													flexGrow={1}
													minW={"12rem"}
													mt={"0.5rem"}
													mb={"1.5rem"}
													mr={"1.5rem"}
												>
													<Text
														fontSize={"md"}
														fontWeight={"bolder"}
														margin={"auto"}
														bg={bgColor(data.post?.category)}
														color={textColor(data.post?.category)}
														pt={"0.5rem"}
														pb={"0.5rem"}
														pl={"0.5rem"}
													>
														{node.node.title}
													</Text>
													<Link href={`${node.node._sys.filename}`}>
														<Box
															margin={"auto"}
															mt={"0.5rem"}
															p={"1.5rem"}
															bg={bgColor(data.post?.category)}
															display={"block"}
														>
															<Img
																rounded={"1.5rem"}
																bg={textColor(node.node?.category)}
																quality="100"
																width={"100%"}
																height={"100%"}
																layout={"responsive"}
																objectFit="cover"
																objectPosition={"50% 50%"}
																src={node.node.image}
																alt={node.node.title}
															/>
														</Box>
													</Link>
												</Box>
											</>
										)}
									</Box>
								);
							})}
						</Flex>
					</Box>
				</Flex>
			</Box>
		</Layout>
	);
}

export const getStaticPaths = async () => {
	const postsResponse = await staticRequest({
		query: `{
        postConnection {
          edges {
            node {
              _sys {
                filename
              }
            }
          }
        }
      }`,
		variables: {},
	});
	const paths = postsResponse.postConnection.edges.map((x) => {
		return { params: { slug: x.node._sys.filename } };
	});

	return {
		paths,
		fallback: "blocking",
	};
};

export const getStaticProps = async (ctx) => {
	const variables = {
		relativePath: ctx.params.slug + ".mdx",
	};
	let data = {};
	try {
		data = await staticRequest({
			query,
			variables,
		});
	} catch (error) {
		console.log(error);
		// swallow errors related to document creation
	}

	return {
		props: {
			data,
			variables,
		},
	};
};

/*

case "PostBlocksQuote":
  return (
    <GridItem>
      <QuoteBlock i={i} block={block} category={`${data.post?.category}`}/>
    </GridItem>
  );
case "PostBlocksGallery":
  return (
    <GridItem>
      <GalleryBlock
        i={i}
        block={block}
        category={`${data.post?.category}`}
      />
    </GridItem>
  );
case "PostBlocksFact":
  return (
    <GridItem>
      <FactBlock i={i} block={block} category={`${data.post?.category}`}/>
    </GridItem>
  );
case "PostBlocksLogos":
  return (
    <GridItem>
      <LogoBlock i={i} block={block} />
    </GridItem>
  );
case "PostBlocksFeatured":
  return (
    <GridItem>
      <FeaturedPostBlock i={i} block={block} posts={posts} />
    </GridItem>
  );
case "PostBlocksCard":
  return (
    <GridItem>
      <CardBlock i={i} block={block} />
    </GridItem>
  );
case "PostBlocksRichtext":
  return (
    <GridItem>
      <RichtextBlock i={i} block={block} category={data.post?.category}/>
    </GridItem>
  );

*/
