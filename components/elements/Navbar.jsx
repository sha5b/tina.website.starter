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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  VStack,
  Spacer,
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
  return (
    <Box m={"1.5rem"} pos={"sticky"} top={0} zIndex={10}>
      <Flex justify="space-between" align={"center"}>
        <Link href="/">
          <Box fontSize={"xl"} color={"whitecuba.100"} flexGrow={1}>
            <Img
              quality="100"
              width={"160"}
              height={"80"}
              objectFit="contain"
              src={Logo}
              alt={"Telesis Logo"}
            />
          </Box>
        </Link>
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
      <Box>
        <Accordion defaultIndex={[0]} allowMultiple allowToggle>
          <AccordionItem border="none">
            <h2>
              <AccordionButton>Category</AccordionButton>
            </h2>
            <AccordionPanel>
              <Flex wrap={"wrap"} gap={15}>
                {category.map((item, i) => {
                  let color = "blacksuite.100";
                  return (
                    <Button
                      flexGrow={1}
                      p={"2rem"}
                      rounded={"none"}
                      color={"whitecuba.100"}
                      bg={"blacksuite.100"}
                      fontSize={"3xl"}
                    >
                      {item}
                    </Button>
                  );
                })}
              </Flex>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem border="none">
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Tags
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Box>
  );
};
