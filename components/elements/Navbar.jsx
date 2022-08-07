import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/Telesis_Logo_black_negativ_space.svg";
import {
  useDisclosure,
  Button,
  Box,
  Flex,
  chakra,
  Heading,
  Text,
  HStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { category, Theme } from "../Theme";

const Img = chakra(Image, {
  shouldForwardProp: (prop) =>
    ["width", "height", "src", "alt", "layout"].includes(prop),
});

export const Navbar = (props) => {
  const { isOpen } = useDisclosure();

  return (
    <Box m={"1.5rem"} pos={"sticky"} top={0} zIndex={10}>
      <Flex justify="space-between" align={"center"}>
        <Link href="/">
          <Box fontSize={"xl"} color={"whitecuba.100"} flexGrow={1}>
            <Img
              color={"orangebiz.100"}
              fill={"orangebiz.100"}
              quality="100"
              width={"160"}
              height={"80"}
              objectFit="contain"
              src={Logo}
              alt={"Telesis Logo"}
            />
          </Box>
        </Link>
        <HStack flexGrow={1} justify={"center"}>
        </HStack>
        <HStack flexGrow={1} justify={"right"}>
          <Button
            rounded={"none"}
            bg={"blacksuite.100"}
            color={"whitecuba.100"}
            href="/"
          >
            About Us
          </Button>
          <Button
            rounded={"none"}
            bg={"blacksuite.100"}
            color={"whitecuba.100"}
            href="/"
          >
            Contact
          </Button>
          <Button
            rounded={"none"}
            bg={"blacksuite.100"}
            color={"whitecuba.100"}
            href="/"
          >
            Our Mission
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
};


/*

                {category.map((item, i) => {
                  return <Box p={"0.5rem"} color={'whitecuba.100'}>{item}</Box>;
                })}
*/