import Link from 'next/link'
import { Box, Flex, Heading, Text, Button } from '@chakra-ui/react'
import { bgColor, textColor, animationDuration, animationHidden, animationVisible } from '../Theme'
import { motion } from 'framer-motion'

export const sectionTemplate = {
	name: 'section',
	label: 'Section',
	ui: {
		itemProps: (item) => {
			return { label: 'Section // ' + item?.title }
		},
	},
	fields: [
		{
			name: 'title',
			label: 'Title',
			type: 'string',
		},
	],
}

export const Section = ({ block, category, id, i }) => {
	return <Flex></Flex>
}
