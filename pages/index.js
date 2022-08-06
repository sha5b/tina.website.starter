// Node Import
import { gql, staticRequest } from "tinacms";
import { useTina } from "tinacms/dist/edit-state";
import React from "react";
// End

// Block Import
import { HeroBlock } from "../components/blocks/HeroBlock";
import { CallToActionBlock } from "../components/blocks/CallToActionBlock";
import { QuoteBlock } from "../components/blocks/QuoteBlock";
import { GalleryBlock } from "../components/blocks/GalleryBlock";
import { FactBlock } from "../components/blocks/FactBlock";
import { LogoBlock } from "../components/blocks/LogoBLock";
import { FeaturedPostBlock } from "../components/blocks/FeaturedPostBlock";
import { CardBlock } from "../components/blocks/CardBlock";
import { RichtextBlock } from "../components/blocks/RichTextBlock";
// End

// Component Import
import { Layout } from "../components/Layout";

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
        position {
          image {
            x
            y
            width
            height
          }
          text {
            x
            y
            width
            height
          }
        }
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
        x
        width
      }
      ... on PageBlocksGallery {
        __typename
        gallery {
          image
          alt
          x
          width
          height
        }
      }
      ... on PageBlocksFact {
        __typename
        fact {
          headline
          subheadline
          x
          width
        }
      }
      ... on PageBlocksLogos {
        __typename
        headline
        logos {
          logo
          alt
          href
        }
      }
      ... on PageBlocksFeatured {
        __typename
        category
        size
      }
      ... on PageBlocksCard {
        __typename
        cards {
          title
          body
          x
          width
        }
      }
      ... on PageBlocksRichtext {
        __typename
        body
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
  const id = data.page.id;
  const posts = data.postConnection.edges;

  // End
  return (
    <Layout>
      {data.page
        ? data.page.blocks?.map((block, i) => {
            switch (block.__typename) {
              case "PageBlocksHero":
                return (
                  <>
                    <HeroBlock id={id} i={i} block={block} />
                  </>
                );
              case "PageBlocksCta":
                return (
                  <>
                    <CallToActionBlock id={id} i={i} block={block} />
                  </>
                );
              case "PageBlocksQuote":
                return (
                  <>
                    <QuoteBlock id={id} i={i} block={block} />
                  </>
                );
              case "PageBlocksGallery":
                return (
                  <>
                    <GalleryBlock id={id} i={i} block={block} />
                  </>
                );
              case "PageBlocksFact":
                return (
                  <>
                    <FactBlock id={id} i={i} block={block} />
                  </>
                );
              case "PageBlocksLogos":
                return (
                  <>
                    <LogoBlock id={id} i={i} block={block} />
                  </>
                );
              case "PageBlocksFeatured":
                return (
                  <>
                    <FeaturedPostBlock
                      id={id}
                      i={i}
                      block={block}
                      posts={posts}
                    />
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

//{fs.writeFileSync('../content/database/Layouts.json', JSON.stringify(users, null, 4))}
