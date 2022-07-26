// Node Import
import { staticRequest } from "tinacms";
import { Layout } from "../components/Layout";
import { useTina } from "tinacms/dist/edit-state";
// End

// Block Import
import { HeroBlock } from "../components/blocks/HeroBlock";
import { CallToActionBlock } from "../components/blocks/CallToActionBlock";
import { QuoteBlock } from "../components/blocks/QuoteBlock";
import { GalleryBlock } from "../components/blocks/GalleryBlock";
import { FactBlock } from "../components/blocks/FactBlock";
import { LogoBlock } from "../components/blocks/LogoBLock";
// End

const query = `{
  page(relativePath: "home.mdx"){
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
                    <HeroBlock i={i} block={block} />
                  </>
                );
              case "PageBlocksCta":
                return (
                  <>
                    {console.log("Call to Action")}
                    {console.log(block)}
                    <CallToActionBlock i={i} block={block} />
                  </>
                );
              case "PageBlocksQuote":
                return (
                  <>
                    {console.log("Quote")}
                    {console.log(block)}
                    <QuoteBlock i={i} block={block} />
                  </>
                );
              case "PageBlocksGallery":
                return (
                  <>
                    {console.log("Gallery")}
                    {console.log(block)}
                    <GalleryBlock i={i} block={block} />
                  </>
                );
              case "PageBlocksFact":
                return (
                  <>
                    {console.log("Fact")}
                    {console.log(block)}
                    <FactBlock i={i} block={block}/>
                  </>
                );
              case 'PageBlocksLogos':
                return(
                  <>
                  {console.log('Logos')}
                  {console.log(block)}
                  <LogoBlock i={i} block={block}/>
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
