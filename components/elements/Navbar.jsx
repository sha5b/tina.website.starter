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
            <Box>
              <AccordionButton
                w={"100px"}
                fontWeight={"bold"}
                rounded={"none"}
                bg={"blacksuite.100"}
                color={"whitecuba.100"}
                mt={"1rem"}
                mb={'1.5rem'}
              >
                Category
              </AccordionButton>
            </Box>
            <AccordionPanel>
              <Flex wrap={"wrap"} gap={15}>
                {category.map((item, i) => {
                  return (
                    <Button
                      flexGrow={1}
                      p={"2rem"}
                      rounded={"none"}
                      color={
                        item === category[0]
                          ? "whitecuba.100"
                          : item === category[1]
                          ? "whitecuba.100"
                          : item === category[2]
                          ? 'blacksuite.100'
                          : item === category[3]
                          ? "whitecuba.100"
                          : item === category[4]
                          ? "whitecuba.100"
                          : item === category[5]
                          ? "whitecuba.100"
                          : 'blacksuite.100'
                      }
                      bg={
                        item === category[0]
                          ? "blacksuite.100"
                          : item === category[1]
                          ? "purplesience.100"
                          : item === category[2]
                          ? 'yellowinsurance.100'
                          : item === category[3]
                          ? 'greenschool.100'
                          : item === category[4]
                          ? 'orangebiz.100'
                          : item === category[5]
                          ? 'greyaltona.100'
                          : 'blacksuite.100'
                      }
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
            <Box>
              <AccordionButton
                w={"100px"}
                rounded={"none"}
                fontWeight={"bold"}
                bg={"blacksuite.100"}
                color={"whitecuba.100"}
                mt={"1rem"}
              >
                Tags
              </AccordionButton>
            </Box>
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
