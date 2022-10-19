import { staticRequest } from 'tinacms'
import { Layout } from '../components/Layout'
import { useTina } from 'tinacms/dist/edit-state'

// Block Import
import { Hero } from '../components/blocks/Hero'
import { CallToAction } from '../components/blocks/CallToAction'

// End

const query = `query getPage($relativePath: String!) {
  page(relativePath: $relativePath) {
    id
    _sys {
      filename
    }
    category
    blocks {
      ... on PageBlocksHero {
        __typename
        title
        subtitle
        image
      }
      ... on PageBlocksCta {
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

export default function Home(props) {
	// data passes though in production mode and data is updated to the sidebar data in edit-mode
	const { data } = useTina({
		query,
		variables: props.variables,
		data: props.data,
	})

	const posts = data.postConnection?.edges
	return (
		<Layout {...props}>
			{data.page
				? data.page.blocks?.map((block, i) => {
						switch (block.__typename) {
							case 'PageBlocksHero':
								return (
									<>
										<Hero i={i} block={block} category={data.page?.category} />
									</>
								)
							case 'PageBlocksCta':
								return (
									<>
										<CallToAction i={i} block={block} category={data.page?.category} />
									</>
								)
						}
				  })
				: null}
		</Layout>
	)
}

export const getStaticPaths = async () => {
	const postsResponse = await staticRequest({
		query: `{
        pageConnection {
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
	})
	const paths = postsResponse.pageConnection.edges.map((x) => {
		return { params: { slug: x.node._sys.filename } }
	})

	return {
		paths,
		fallback: 'blocking',
	}
}

export const getStaticProps = async (ctx) => {
	const variables = {
		relativePath: ctx.params.slug + '.mdx',
	}
	let data = {}
	try {
		data = await staticRequest({
			query,
			variables,
		})
	} catch (error) {
		console.log(error)
		// swallow errors related to document creation
	}

	return {
		props: {
			data,
			variables,
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
