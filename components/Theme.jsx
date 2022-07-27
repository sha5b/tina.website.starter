import { extendTheme } from '@chakra-ui/react'


export const Theme = extendTheme({
  colors: {
    light:{
        100: '#f5f5f5'
    },
    dark:{
      100: '#060606'
    },
    orange:{
      100: '#EC681D'
    }
  },
  fonts: {
    body: "Arvo, sans-serif",
    heading: "Outfit, serif",
    mono: "Menlo, monospace",
  },
});