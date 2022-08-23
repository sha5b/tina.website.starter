import Link from "next/link";
import { useState } from "react";
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
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Divider,
} from "@chakra-ui/react";
import { category } from "../Theme";

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
          <Link href="/about/">
            <Button
              rounded={"none"}
              bg={"blacksuite.100"}
              color={"whitecuba.100"}
            >
              About Us
            </Button>
          </Link>
          <Link href="/contact/">
            <Button
              rounded={"none"}
              bg={"blacksuite.100"}
              color={"whitecuba.100"}
            >
              Contact
            </Button>
          </Link>
          <Link href="/our_mission/">
            <Button
              rounded={"none"}
              bg={"blacksuite.100"}
              color={"whitecuba.100"}
            >
              Our Mission
            </Button>
          </Link>
        </HStack>
      </Flex>
      <Box>
        <Accordion allowMultiple allowToggle>
          <Flex gap={15}>
            <AccordionItem border="none">
              <Box pos={"relative"}>
                <AccordionButton
                  w={"150px"}
                  fontWeight={"bold"}
                  rounded={"none"}
                  bg={"blacksuite.100"}
                  color={"whitecuba.100"}
                >
                  Field of Work
                </AccordionButton>
              </Box>
              <AccordionPanel>
                <Flex wrap={"wrap"} gap={15}>
                  <Divider />
                  {category.map((item, i) => {
                    return (
                      <Link
                        href={
                          item === category[0]
                            ? "/geo_tech/"
                            : item === category[1]
                            ? "/data_science/"
                            : item === category[2]
                            ? "/knowledge_management/"
                            : item === category[3]
                            ? "/ecosystem_service/"
                            : item === category[4]
                            ? "/integral_technical_planning/"
                            : item === category[5]
                            ? "/sustainable_cities_and_living_spaces/"
                            : "/"
                        }
                      >
                        <Button
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
                      </Link>
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
                >
                  Topics
                </AccordionButton>
              </Box>
              <AccordionPanel gap={15} pb={4}>
                <Divider />
                <Accordion allowMultiple allowToggle>
                  <Flex wrap={"wrap"}>
                    {props.props.data?.postConnection.edges.map((node, i) => {
                      const mergedTags = node.node.tags.concat(node.node.tags)
                      return (
                        <>
                          {mergedTags?.map((tag, i) => {
                            return (
                              <AccordionItem border="none" m={"0.25rem"}>
                                <AccordionButton
                                  color={"whitecuba.100"}
                                  rounded={"none"}
                                  textAlign={"center"}
                                  size={"sm"}
                                  bg={"blacksuite.100"}
                                >
                                  {tag}
                                </AccordionButton>

                                <AccordionPanel>
                                  <Text>{node.node._sys?.filename}</Text>
                                </AccordionPanel>
                              </AccordionItem>
                            );
                          })}
                        </>
                      );
                    })}
                  </Flex>
                </Accordion>
              </AccordionPanel>
            </AccordionItem>
          </Flex>
        </Accordion>
      </Box>
    </Box>
  );
};
