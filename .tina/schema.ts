import { type } from "os";
import { defineConfig, defineSchema, TinaTemplate } from "tinacms";

import { callToActionTemplate } from "../components/blocks/CallToAction";
import { heroTemplate } from "../components/blocks/Hero";

import { category, colors } from "../components/Theme";

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
