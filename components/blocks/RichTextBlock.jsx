import {
	chakra,
	Box,
	Grid,
	GridItem,
	Heading,
	Text,
	Divider,
	Button,
} from "@chakra-ui/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import Image from "next/image";
import Link from "next/link";
import {
	bgColor,
	textColor,
	animationDuration,
	animationHidden,
	animationVisible,
} from "../../components/Theme";
import { motion } from "framer-motion";

export const RichtextBlock = ({ block, category, id, i }) => {
	const components = {
		h1: (props) => (
			<Heading
				as="h1"
				color={bgColor(category)}
				fontSize="7xl"
				pb={"0.75rem"}
				{...props}
			/>
		),
		h2: (props) => (
			<Heading
				as="h2"
				color={bgColor(category)}
				fontSize="6xl"
				pb={"0.75rem"}
				{...props}
			/>
		),
		h3: (props) => (
			<Heading
				as="h3"
				color={bgColor(category)}
				fontSize="5xl"
				pb={"0.75rem"}
				{...props}
			/>
		),
		h4: (props) => (
			<Heading
				as="h4"
				color={bgColor(category)}
				fontSize="4xl"
				pb={"0.75rem"}
				{...props}
			/>
		),
		h5: (props) => (
			<Heading
				as="h5"
				color={bgColor(category)}
				fontSize="3xl"
				pb={"0.75rem"}
				{...props}
			/>
		),
		h6: (props) => (
			<Heading
				as="h6"
				color={bgColor(category)}
				fontSize="2xl"
				pb={"0.75rem"}
				{...props}
			/>
		),
		li: (props) => <Box as="li" fontSize="2xl" py={2} px={4} {...props} />,
		ul: (props) => <Box as="ul" fontSize="2xl" py={2} px={4} {...props} />,
		ol: (props) => <Box as="ol" fontSize="2xl" py={2} px={4} {...props} />,
		a: (props) => {
			return <Link href={props.href}>{props.children}</Link>;
		},
		code: (props) => {
			return (
				<Code fontSize="lg" my={2}>
					{props.children}
				</Code>
			);
		},
		hr: (props) => {
			return <Divider mb={"1.5rem"} {...props} />;
		},
		p: (props) => {
			return (
				<Box>
					<Text
						fontSize="2xl"
						textAlign={"left"}
						{...props}
						pt={"0.5rem"}
						pb={"0.75rem"}
					/>
				</Box>
			);
		},
		img: (props) => {
			const Img = chakra(Image, {
				shouldForwardProp: (prop) =>
					["width", "height", "src", "alt", "layout", "fill"].includes(prop),
			});

			return (
				<Img
					p="1.5rem"
					mx="auto"
					src={props.url ? props.url : "/"}
					height={"50%"}
					width="100%"
					layout="responsive"
					alt={props.alt}
					objectFit="cover"
					quality="100"
					objectPosition={"50% 50%"}
					rounded="1.5rem"
					{...props}
				/>
			);
		},

		callout: (props) => {
			if (!props.message) {
				return null;
			}
			return (
				<Box textAlign={"center"} pt={"1.5rem"} pb={"1.5rem"}>
					<Link href={`${props.href}`}>
						<Button
							as="h5"
							fontSize={"xl"}
							size={"lg"}
							rounded={"none"}
							fontWeight={"extrabold"}
							bg={bgColor(category)}
							color={textColor(category)}
							p={"1.5rem"}
							{...props}
						>
							{props.message}
						</Button>
					</Link>
				</Box>
			);
		},
	};

	return (
		<Box
			pt={"2rem"}
			pb={"2rem"}
			as={motion.div}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			transition={{ duration: animationDuration }}
			variants={{
				visible: animationVisible,
				hidden: animationHidden,
			}}
		>
			<Grid
				templateColumns={"repeat(6, 1fr)"}
				autoRows={"auto"}
				autoColumns={"auto"}
				gap={25}
			>
				{block.textblock?.map((textitem) => {
					return (
						<GridItem colStart={textitem?.x} colSpan={textitem?.width}>
							<TinaMarkdown content={textitem.body} components={components} />
						</GridItem>
					);
				})}
			</Grid>
		</Box>
	);
};


/*

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

*/