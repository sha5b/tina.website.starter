import Image from 'next/image'
import { chakra, Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import { bgColor, textColor, animationDuration, animationHidden, animationVisible } from '../Theme'
import { motion } from 'framer-motion'

const Img = chakra(Image, {
	shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt', 'layout'].includes(prop),
})

export const heroTemplate = {
	name: 'hero',
	label: 'Hero',
	ui: {
		itemProps: (item) => {
			return { label: 'Hero // ' + item?.title }
		},
	},
	fields: [
		{
			name: 'title',
			label: 'Title',
			type: 'string',
		},
		{
			name: 'subtitle',
			label: 'Subtitle',
			type: 'string',
			ui: {
				component: 'textarea',
			},
		},
		{
			name: 'image',
			label: 'Image',
			type: 'image',
		},
		{
			name: 'position',
			label: 'Positions',
			type: 'object',
			fields: [
				{
					name: 'text',
					label: 'Textposition',
					type: 'object',
					fields: [
						{
							name: 'x',
							label: 'X Position',
							type: 'number',
							ui: {
								validate: (val) => {
									if (val >= 8) {
										return 'the number must be less then 8'
									}
								},
							},
						},
						{
							name: 'width',
							label: 'Width',
							type: 'number',
							ui: {
								validate: (val) => {
									if (val >= 8) {
										return 'the number must be less then 8'
									}
								},
							},
						},
						{
							name: 'y',
							label: 'Y Position',
							type: 'number',
							ui: {
								validate: (val) => {
									if (val >= 51) {
										return 'the number must be less then 51'
									}
								},
							},
						},
						{
							name: 'height',
							label: 'Height',
							type: 'number',
							ui: {
								validate: (val) => {
									if (val >= 51) {
										return 'the number must be less then 51'
									}
								},
							},
						},
					],
				},
				{
					name: 'image',
					label: 'Imageposition',
					type: 'object',
					fields: [
						{
							name: 'x',
							label: 'Start X',
							type: 'number',
						},
						{
							name: 'width',
							label: 'Width',
							type: 'number',
						},
						{
							name: 'y',
							label: 'Y',
							type: 'number',
						},
						{
							name: 'height',
							label: 'Height',
							type: 'number',
						},
					],
				},
			],
		},
	],
}

export const Hero = ({ block, category, id, i }) => {
	return (
		<Box
			pt={'1.5rem'}
			pb={'1.5rem'}
			key={id + i}
			as={motion.div}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			transition={{ duration: animationDuration }}
			variants={{
				visible: animationVisible,
				hidden: animationHidden,
			}}>
			<Grid templateColumns={'repeat(6, 1fr)'} autoRows={'auto'} gap={5} pos={'relative'}>
				<GridItem
					bg={bgColor(category)}
					zIndex={1}
					colStart={block.position?.text.x}
					colSpan={block.position?.text.width}
					rowStart={block.position?.text.y}
					rowSpan={block.position?.text.height}
					pos={'relative'}>
					<Box p={'1.5rem'} textAlign={'center'}>
						<Heading color={textColor(category)} fontSize={'4xl'}>
							{block.title}
						</Heading>
						<Text
							color={textColor(category)}
							fontSize={'2xl'}
							fontFamily={'Space Grotesk, sans-serif'}
							fontWeight="hairline">
							{block.subtitle}
						</Text>
					</Box>
				</GridItem>
				{block.image && (
					<GridItem
						colStart={block.position?.image?.x ?? 1}
						colSpan={block.position?.image?.width ?? 1}
						rowStart={block.position?.image?.y ?? 1}
						rowSpan={block.position?.image?.height ?? 1}
						pos="relative">
						<Img
							zIndex={0}
							quality="100"
							width={'100%'}
							layout={'fill'}
							objectFit="cover"
							rounded={'1.5rem'}
							objectPosition={'50% 50%'}
							src={block.image}
							alt={block.title}
						/>
					</GridItem>
				)}
			</Grid>
		</Box>
	)
}

// Problems to solve: I have fatal error when i leave the width and height values to 0 in the tina cms form. i nee to solve this
