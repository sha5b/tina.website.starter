import Image from "next/image";
import { Heading, Box, Flex, chakra, Divider } from "@chakra-ui/react";
import { animationDuration, animationHidden, animationVisible } from "../Theme";
import { motion } from "framer-motion";

const Img = chakra(Image, {
	shouldForwardProp: (prop) =>
		["width", "height", "src", "alt", "layout"].includes(prop),
});

export const LogoBlock = ({ block, id, i }) => {
	return (
		<Box
			mt={"1.5rem"}
			mb={"1.5rem"}
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
			<Heading textAlign={"center"} fontSize="3xl" pb={"1.5rem"}>
				{block.headline}
			</Heading>
			<Divider />
			<Flex justify={"space-evenly"} gap={"1.5rem"} wrap={"wrap"}>
				{block.logos?.map((item) => {
					return (
						<Box pt={"1.5rem"}>
							{item.logo && (
								<a href={item?.href ?? "/"}>
									<Box display={"block"}>
										<Img
											width={block?.width ?? "50"}
											height="100%"
											quality="100"
											objectPosition={"50% 50%"}
											objectFit="contain"
											src={item.logo}
											alt={"Logo"}
										/>
									</Box>
								</a>
							)}
						</Box>
					);
				})}
			</Flex>
		</Box>
	);
};


/*

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

*/