import { defineConfig, defineSchema, TinaTemplate } from "tinacms";

// Block Section

const heroBlock: TinaTemplate = {
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
    
  ],
};

// Block Section End

// Variables

const blocks = [heroBlock];
const category = [
  "Geo Tech",
  "Data Sience",
  "Knowledge Management",
  "Ecosystem Service",
  "Integral Technical Planning",
  "Sustainable Cities & Living Spaces",
];

// End
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
          name: 'category',
          label: 'Category',
          type: 'string',
          list: true,
          options: category,
        },
        {
          name: 'date',
          label: 'Published Date',
          type: 'datetime',
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
          name: 'ogimage',
          label: 'og:image',
          type: 'image'
        },
      ],
    },
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

        return undefined;
      });

      cms.plugins.add(RouteMapping);
    });
    return cms;
  },
});
