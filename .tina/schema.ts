import { type } from "os";
import {
  defineConfig,
  defineSchema,
  TinaTemplate,
} from "tinacms";

import { callToActionTemplate } from "../components/blocks/CallToAction";
import { heroTemplate } from "../components/blocks/Hero";






import { category, colors } from "../components/Theme";


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
        {
          name: "x",
          label: "X Position",
          type: "number",
        },
        {
          name: "width",
          label: "Width",
          type: "number",
        },
        {
          name: "height",
          label: "Height",
          type: "number",
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
          ui: {
            component: "textarea",
          },
        },
        {
          name: "x",
          label: "X Position",
          type: "number",
        },
        {
          name: "width",
          label: "Width",
          type: "number",
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
      name: "width",
      label: "Logo Widths",
      type: "number",
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
        {
          name: "href",
          label: "HREF",
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
      options: category,
    },
    {
      name: "size",
      label: "Gridsize",
      type: "number",
    },
    {
      name: "colors",
      label: "Colors",
      type: "string",
      options: colors,
    },
  ],
};

const CardBlock: TinaTemplate = {
  label: "Cards",
  name: "card",
  fields: [
    {
      name: "cards",
      label: "Cards",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.title };
        },
      },
      fields: [
        {
          name: "title",
          label: "Title",
          type: "string",
        },
        {
          name: "body",
          label: "Body",
          type: "rich-text",
        },
        {
          label: "Href",
          name: "href",
          type: "string",
        },
        {
          name: "x",
          label: "X Position",
          type: "number",
        },
        {
          name: "width",
          label: "Width",
          type: "number",
        },
        {
          name: "category",
          label: "Category",
          type: "string",
          options: category,
        },
      ],
    },
  ],
};

const RichtextBlock: TinaTemplate = {
  label: "Rich Text",
  name: "richtext",
  fields: [
    {
      name: "textblock",
      label: "Textblock",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.title };
        },
      },
      fields: [
        {
          name: "x",
          label: "X Position",
          type: "number",
        },
        {
          name: "width",
          label: "Width",
          type: "number",
        },
        {
          name: "body",
          label: "Body",
          type: "rich-text",
          templates: [
            {
              name: "callout",
              label: "Callout",
              fields: [
                {
                  name: "message",
                  label: "Message",
                  type: "string",
                },
                {
                  name: "href",
                  label: "href",
                  type: "string",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};


const blocks = [
  callToActionTemplate as TinaTemplate,
  heroTemplate as TinaTemplate,
];

const schema = defineSchema({
  config: {
    clientId: "***",
    branch: "***",
    token: "***",
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
          name: "category",
          label: "Category",
          type: "string",
          options: category,
        },
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
          name: "date",
          label: "Published Date",
          dateFormat: "DD MMMM YYYY",
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
          name: "category",
          label: "Category",
          type: "string",
          options: category,
        },
        {
          type: "string",
          label: "Tags",
          name: "tags",
          list: true,
          ui: {
            component: "tags",
          },
        },
        {
          name: "image",
          label: "og:image",
          type: "image",
        },
        {
          name: "blocks",
          label: "Post Block Section",
          type: "object",
          list: true,
          templates: blocks,
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
        {
          name: "long",
          label: "Long",
          type: "number",
        },
        {
          name: "lat",
          label: "Lati",
          type: "number",
        },
        {
          name: "bearing",
          label: "Bearing",
          type: "number",
        },
        {
          name: "pitch",
          label: "Pitch",
          type: "number",
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
        if (["page"].includes(collection.name)) {
          return `/${document._sys.filename}`;
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
