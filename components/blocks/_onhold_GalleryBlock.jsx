import { Box, Grid, GridItem, chakra } from "@chakra-ui/react";
import Image from "next/image";
import { useDisclosure } from "@chakra-ui/react";
import {
	bgColor,
	animationDuration,
	animationHidden,
	animationVisible,
} from "../Theme";
import { motion } from "framer-motion";

const Img = chakra(Image, {
	shouldForwardProp: (prop) =>
		["width", "height", "src", "alt", "layout"].includes(prop),
});

export const GalleryBlock = ({ block, category, id, i }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<Grid
			templateColumns={"repeat(6, 1fr)"}
			gap={5}
			autoRows={"auto"}
			autoColumns={"auto"}
			pt={"1rem"}
			pb={"1rem"}
		>
			{block.gallery?.map((item, i) => {
				return (
					<GridItem
						colStart={item?.x}
						colSpan={item?.width}
						zIndex={-i}
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
						{item.image && (
							<Box
								p={"1.5rem"}
								bg={bgColor(category)}
								display={"block"}
								onClick={onOpen}
							>
								<Img
									rounded={"1.5rem"}
									quality="100"
									width={"100%"}
									objectPosition={"50% 50%"}
									height={item?.height ?? "25%"}
									layout={"responsive"}
									objectFit="cover"
									src={item.image}
									alt={item.alt}
								/>
							</Box>
						)}
					</GridItem>
				);
			})}
		</Grid>
	);
};

/*


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

*/