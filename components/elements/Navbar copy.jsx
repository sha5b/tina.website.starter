import Link from "next/link";
import Image from "next/image";
import { useTina } from "tinacms/dist/edit-state";
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
  Divider,
} from "@chakra-ui/react";
import { category, Theme } from "../Theme";

const Img = chakra(Image, {
  shouldForwardProp: (prop) =>
    ["width", "height", "src", "alt", "layout"].includes(prop),
});

export const Navbar = (props) => {
  return (
    <Box pos={"sticky"} top={0} zIndex={10}>
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
        <Accordion allowMultiple allowToggle>
          <Flex gap={15}>
            <AccordionItem border="none">
              <Box pos={"relative"}>
                <AccordionButton
                  w={"100px"}
                  fontWeight={"bold"}
                  rounded={"none"}
                  bg={"blacksuite.100"}
                  color={"whitecuba.100"}
                >
                  Category
                </AccordionButton>
              </Box>
              <AccordionPanel>
                <Flex wrap={"wrap"} gap={15}>
                  <Divider />
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
                            ? "blacksuite.100"
                            : item === category[3]
                            ? "whitecuba.100"
                            : item === category[4]
                            ? "whitecuba.100"
                            : item === category[5]
                            ? "whitecuba.100"
                            : "blacksuite.100"
                        }
                        bg={
                          item === category[0]
                            ? "blacksuite.100"
                            : item === category[1]
                            ? "purplesience.100"
                            : item === category[2]
                            ? "yellowinsurance.100"
                            : item === category[3]
                            ? "greenschool.100"
                            : item === category[4]
                            ? "orangebiz.100"
                            : item === category[5]
                            ? "greylondon.100"
                            : "blacksuite.100"
                        }
                        fontSize={"1xl"}
                      >
                        {item}
                      </Button>
                    );
                  })}
                </Flex>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem border="none">
              <Box pos={"relative"}>
                <AccordionButton
                  w={"100px"}
                  rounded={"none"}
                  fontWeight={"bold"}
                  bg={"blacksuite.100"}
                  color={"whitecuba.100"}
                >
                  Tags
                </AccordionButton>
              </Box>
              <AccordionPanel gap={15} pb={4}>
                <Flex wrap={"wrap"} gap={15}>
                  <Divider />
                  {props.props.data?.postConnection.edges.map((node, i) => {
                    return (
                      <>
                        {node.node.tags?.map((tag, i) => {
                          return (
                            <Button
                              p={"1rem"}
                              color={"whitecuba.100"}
                              rounded={'none'}
                              textAlign={"center"}
                              size={"sm"}
                              bg={"blacksuite.100"}
                            >
                              {tag}
                            </Button>
                          );
                        })}
                      </>
                    );
                  })}
                </Flex>
              </AccordionPanel>
            </AccordionItem>
          </Flex>
        </Accordion>
      </Box>
    </Box>
  );
};
