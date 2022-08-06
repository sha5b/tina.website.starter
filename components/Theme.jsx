import { extendTheme } from "@chakra-ui/react";


// "Liberata, serif", "Space Grotesk, sans-serif","DejaVu Mono, monospace",
export const Theme = extendTheme({
  fonts: {
    body: "DejaVu Mono, monospace",
    heading: "Space Grotesk, sans-serif",
    mono: "DejaVu Mono, monospace",
  },

  colors: {
    whitecuba: {
      100: "#E7E8E9",
    },
    blacksuite: {
      100: "#251F1F",
    },
    greyaltona: {
      100: "#E7E8E9",
    },
    greylondon: {
      100: "#464242",
    },
    orangebiz: {
      100: "#EC681D",
    },
    purplesience: {
      100: "#7F40F1",
    },
    yellowinsurance: {
      100: "#F1E540",
    },
    greenschool: {
      100: "#45DEA0",
    },
  },
});
