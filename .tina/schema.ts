import { defineConfig, defineSchema, TinaTemplate } from "tinacms";

// Variables
const category = [
  "Geo Tech",
  "Data Sience",
  "Knowledge Management",
  "Ecosystem Service",
  "Integral Technical Planning",
  "Sustainable Cities & Living Spaces",
];
// End

// Block Section

const HeroBlock: TinaTemplate = {
  name: "hero",
  label: "Hero",
  fields: [
    {
      name: "title",
      label: "Title",
      type: "string",
    },
    {
      name: "subtitle",
      label: "Subtitle",
      type: "string",
    },
    {
      name: "image",
      label: "Image",
      type: "image",
    },
  ],
};

const CallToActionBlock: TinaTemplate = {
  name: "cta",
  label: "Call to Action",
  fields: [
    {
      name: "title",
      label: "Title",
      type: "string",
    },
    {
      name: "subtitle",
      label: "Subtitle",
      type: "string",
    },
    {
      name: "button",
      label: "Button",
      type: "object",
      fields: [
        {
          name: "label",
          label: "Label",
          type: "string",
        },
        {
          name: "href",
          label: "Href",
          type: "string",
        },
      ],
    },
  ],
};

const QuoteBlock: TinaTemplate = {
  name: "quote",
  label: "Quote",
  fields: [
    {
      name: "quote",
      label: "Quote",
      type: "string",
    },
    {
      name: "author",
      label: "author",
      type: "string",
    },
  ],
};

const GalleryBlock: TinaTemplate = {
  name: "gallery",
  label: "Gallery",
  fields: [
    {
      name: "gallery",
      label: "Images",
      list: true,
      type: "object",
      ui: {
        itemProps: (item) => {
          return { label: item?.alt };
        },
      },
      fields: [
        {
          name: "image",
          label: "Single Image",
          type: "image",
        },
        {
          name: "alt",
          label: "Alternative Descirption",
          type: "string",
        },
      ],
    },
  ],
};

const FactBlock: TinaTemplate = {
  name: "fact",
  label: "Facts",
  fields: [
    {
      name: "fact",
      label: "Facts",
      list: true,
      type: "object",
      ui: {
        itemProps: (item) => {
          return { label: item?.headline };
        },
      },
      fields: [
        {
          name: "headline",
          label: "Headline",
          type: "string",
        },
        {
          name: "subheadline",
          label: "Subheadline",
          type: "string",
        },
      ],
    },
  ],
};

const LogoBlock: TinaTemplate = {
  name: "logos",
  label: "Logos",
  fields: [
    {
      name: "headline",
      label: "Headline",
      type: "string",
    },
    {
      name: "logos",
      label: "Logos",
      list: true,
      type: "object",
      ui: {
        itemProps: (item) => {
          return { label: item?.alt };
        },
      },
      fields: [
        {
          name: "logo",
          label: "Single Logo",
          type: "image",
        },
        {
          name: "alt",
          label: "Alternative Description",
          type: "string",
        },
      ],
    },
  ],
};

const FeaturedPostBlock: TinaTemplate = {
  label: "Featured Posts",
  name: "featured",
  fields: [
    {
      name: "category",
      label: "Category",
      type: "string",
      list: true,
      options: category,
    },
  ],
};
// Block Section End

const blocks = [
  HeroBlock,
  CallToActionBlock,
  QuoteBlock,
  GalleryBlock,
  FactBlock,
  LogoBlock,
  FeaturedPostBlock,
];

const schema = defineSchema({
  config: {
    media: {
      tina: {
        mediaRoot: "uploads",
        publicFolder: "public",
      },
    },
  },
  collections: [
    {
      label: "Pages",
      name: "page",
      path: "content/page",
      format: "mdx",
      fields: [
        {
          name: "blocks",
          label: "Page Block Section",
          type: "object",
          list: true,
          templates: blocks,
        },
      ],
    },
    // End of Pages
    {
      label: "Posts",
      name: "post",
      path: "content/post",
      format: "mdx",
      fields: [
        {
          type: "string",
          label: "Title",
          name: "title",
        },
        {
          name: "category",
          label: "Category",
          type: "string",
          list: true,
          options: category,
        },
        {
          name: "date",
          label: "Published Date",
          type: "datetime",
        },
        {
          type: "string",
          label: "Description",
          name: "description",
          ui: {
            component: "textarea",
          },
        },
        {
          name: "image",
          label: "og:image",
          type: "image",
        },
      ],
    },
    // End of Posts
    {
      label: "Maps",
      name: "map",
      path: "content/map",
      format: "mdx",
      fields: [
        {
          name: "date",
          label: "Published Date",
          type: "datetime",
        },
      ],
    },
    // End of Maps
  ],
});

export default schema;

const branch = process.env.NEXT_PUBLIC_EDIT_BRANCH || "main";
const apiURL =
  process.env.NODE_ENV == "development"
    ? "http://localhost:4001/graphql"
    : `https://content.tinajs.io/content/${process.env.NEXT_PUBLIC_TINA_CLIENT_ID}/github/${branch}`;

export const tinaConfig = defineConfig({
  apiURL,
  schema,
  cmsCallback: (cms) => {
    import("tinacms").then(({ RouteMappingPlugin }) => {
      const RouteMapping = new RouteMappingPlugin((collection, document) => {
        if (["page"].includes(collection.name)) {
          if (document._sys.filename === "home") {
            return "/";
          }
        }

        if (["post"].includes(collection.name)) {
          return `/posts/${document._sys.filename}`;
        }

        if (["map"].includes(collection.name)) {
          return `/maps/${document._sys.filename}`;
        }

        return undefined;
      });

      cms.plugins.add(RouteMapping);
    });
    return cms;
  },
});
