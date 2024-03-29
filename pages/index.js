// Node Import
import { gql, staticRequest } from 'tinacms'
import { useTina } from 'tinacms/dist/edit-state'
import React from 'react'
import { Layout } from '../components/Layout'
import { Box, Flex, Text, chakra, Button } from '@chakra-ui/react'
import { bgColor, textColor } from '../components/Theme'
import Link from 'next/link'
import Image from 'next/image'
// End

// Block Import
import { Hero } from '../components/blocks/Hero'
import { CallToAction } from '../components/blocks/CallToAction'

// End

const query = `
query FetchQuery{
  page (relativePath: "home.mdx"){
    id
    blocks {
      ... on PageBlocksHero {
        __typename
        title
        subtitle
        image
      }
    }
  }
  postConnection {
    edges {
      node {
        _sys{
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
}`

const Img = chakra(Image, {
	shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt', 'layout'].includes(prop),
})

export default function Home(props) {
	// data passes though in production mode and data is updated to the sidebar data in edit-mode
	const { data } = useTina({
		query,
		variables: {},
		data: props.data,
	})

	// Variables
	const posts = data.postConnection?.edges

	// End
	return (
		<Layout {...props}>
			{data.page
				? data.page.blocks?.map((block, i) => {
						switch (block.__typename) {
							case 'PageBlocksHero':
								return (
									<>
										<Hero i={i} block={block} />
									</>
								)
							case 'PageBlocksCta':
								return (
									<>
										<CallToAction i={i} block={block} />
									</>
								)
						}
				  })
				: null}
			<Box>
				<Flex wrap={'wrap'}>
					<Box pt={'2rem'} w={'100%'}>
						<Button
							p={'2rem'}
							rounded={'none'}
							color={'whitecuba.100'}
							bg={'blacksuite.100'}
							fontSize={'3xl'}>
							All Articles
						</Button>
						<Flex pt={'1.5rem'} gap={10} wrap={'wrap'} justify={'center'}>
							{posts?.map((node) => {
								return (
									<Box w={'12rem'}>
										<Box boxShadow={'md'}>
											<Text
												fontSize={'sm'}
												fontWeight={'bolder'}
												margin={'auto'}
												bg={bgColor(node.node?.category)}
												color={textColor(node.node?.category)}
												p={'0.5rem'}>
												{node.node.title}
											</Text>
											<Link href={`posts/${node.node._sys.filename}`}>
												<Box
													flexGrow={1}
													margin={'auto'}
													mt={'0.5rem'}
													p={'1rem'}
													bg={bgColor(node.node?.category)}
													display={'block'}>
													<Img
														bg={textColor(node.node?.category)}
														rounded={'1.5rem'}
														quality="100"
														width={'100%'}
														height={'100%'}
														layout={'responsive'}
														objectFit="cover"
														objectPosition={'50% 50%'}
														src={node.node.image}
														alt={node.node.title}
													/>
												</Box>
											</Link>
										</Box>
									</Box>
								)
							})}
						</Flex>
					</Box>
				</Flex>
			</Box>
		</Layout>
	)
}

export const getStaticProps = async () => {
	const variables = {}
	let data = {}
	try {
		data = await staticRequest({
			query,
			variables,
		})
	} catch {
		// swallow errors related to document creation
	}

	return {
		props: {
			data,
			//myOtherProp: 'some-other-data',
		},
	}
}

/*
case "PageBlocksQuote":
  return (
    <>
      <QuoteBlock i={i} block={block} />
    </>
  );
case "PageBlocksGallery":
  return (
    <>
      <GalleryBlock i={i} block={block} />
    </>
  );
case "PageBlocksFact":
  return (
    <>
      <FactBlock i={i} block={block} />
    </>
  );
case "PageBlocksLogos":
  return (
    <>
      <LogoBlock i={i} block={block} />
    </>
  );
case "PageBlocksFeatured":
  return (
    <>
      <FeaturedPostBlock i={i} block={block} posts={posts} />
    </>
  );
case "PageBlocksCard":
  return (
    <>
      <CardBlock i={i} block={block} />
    </>
  );
case "PageBlocksRichtext":
  return (
    <>
      <RichtextBlock i={i} block={block} />
    </>
  );
*/
