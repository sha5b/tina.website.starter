// Node Import
import { staticRequest } from "tinacms";
import { useTina } from "tinacms/dist/edit-state";
// End

// Block Import
import { HeroBlock } from "../components/blocks/HeroBlock";
import { CallToActionBlock } from "../components/blocks/CallToActionBlock";
import { QuoteBlock } from "../components/blocks/QuoteBlock";
import { GalleryBlock } from "../components/blocks/GalleryBlock";
import { FactBlock } from "../components/blocks/FactBlock";
import { LogoBlock } from "../components/blocks/LogoBLock";
import { FeaturedPostBlock } from "../components/blocks/FeaturedPostBlock";
// End

// Component Import
import { Layout } from "../components/Layout";
// End

const query = `{
  page(relativePath: "home.mdx"){
    id
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
      ... on PageBlocksQuote {
        __typename
        quote
        author
      }
      ... on PageBlocksGallery {
        __typename
        gallery {
          image
          alt
        }
      }
      ... on PageBlocksFact {
        __typename
        fact {
          headline
          subheadline
        }
      }
      ... on PageBlocksLogos {
        __typename
        headline
        logos {
          logo
        }
      }
      ... on PageBlocksFeatured {
        __typename
        category
      }
    }
  }
  postConnection {
    edges {
      node {
        title
        category
        date
        description
        image
      }
    }
  }
}`;

export default function Home(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query,
    variables: {},
    data: props.data,
  });

  // Variables
  const id = data.page.id
  const posts = data.postConnection.edges
  // End
  return (
    <Layout>
      {data.page
        ? data.page.blocks?.map((block, i) => {
            switch (block.__typename) {
              case "PageBlocksHero":
                return (
                  <>
                    {console.log("Heroblock")}
                    {console.log(block)}
                    <HeroBlock id={id} i={i} block={block} />
                  </>
                );
              case "PageBlocksCta":
                return (
                  <>
                    {console.log("Call to Action")}
                    {console.log(block)}
                    <CallToActionBlock id={id} i={i} block={block} />
                  </>
                );
              case "PageBlocksQuote":
                return (
                  <>
                    {console.log("Quote")}
                    {console.log(block)}
                    <QuoteBlock id={id} i={i} block={block} />
                  </>
                );
              case "PageBlocksGallery":
                return (
                  <>
                    {console.log("Gallery")}
                    {console.log(block)}
                    <GalleryBlock id={id} i={i} block={block} />
                  </>
                );
              case "PageBlocksFact":
                return (
                  <>
                    {console.log("Fact")}
                    {console.log(block)}
                    <FactBlock id={id} i={i} block={block}/>
                  </>
                );
              case 'PageBlocksLogos':
                return(
                  <>
                  {console.log('Logos')}
                  {console.log(block)}
                  <LogoBlock id={id} i={i} block={block}/>
                  </>
                )
              case 'PageBlocksFeatured':
                return(
                  <>
                  {console.log('Featured')}
                  {console.log(block)}
                  <FeaturedPostBlock id={id} i={i} block={block} posts={posts}/>
                  </>
                )
            }
          })
        : null}
    </Layout>
  );
}

export const getStaticProps = async () => {
  const variables = {};
  let data = {};
  try {
    data = await staticRequest({
      query,
      variables,
    });
  } catch {
    // swallow errors related to document creation
  }

  return {
    props: {
      data,
      //myOtherProp: 'some-other-data',
    },
  };
};
