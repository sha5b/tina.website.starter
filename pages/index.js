import { staticRequest } from "tinacms";
import { Layout } from "../components/Layout";
import { useTina } from "tinacms/dist/edit-state";

// Block Import
import { HeroBlock } from "../components/blocks/HeroBlock";
import { CallToActionBlock } from "../components/blocks/CallToActionBlock";
import { QuoteBlock } from "../components/blocks/QuoteBlock";
import { GalleryBlock } from '../components/blocks/GalleryBlock'
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
                    <CallToActionBlock block={block} />
                  </>
                );
              case "PageBlocksQuote":
                return (
                  <>
                    {console.log("Quote")}
                    {console.log(block)}
                    <QuoteBlock block={block} />
                  </>
                );
              case "PageBlocksGallery":
                return (
                  <>
                    {console.log("Gallery")}
                    {console.log(block)}
                    <GalleryBlock block={block}/>
                  </>
                );
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
