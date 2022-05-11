import {
  Accordion,
  AccordionIcon,
  AccordionButton,
  AccordionItem,
  Box,
  Flex,
  Icon,
  Text,
  AccordionPanel,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
  Tooltip,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const AccordionSidebar = ({ name, icon, path, accordion, isOpen }) => {
  return (
    <>
      <Accordion allowMultiple display={!isOpen && "none"}>
        <AccordionItem border={"0px"}>
          <NavLink to={path}>
            <AccordionButton
              className="accordion_button"
              p="0"
              w="100%"
              outline="unset"
            >
              <Flex
                className="nav_wrapper"
                w="100%"
                px="2"
                alignItems="center"
                bg={isOpen && "secondary"}
                borderRadius={isOpen && "xl"}
                my={isOpen && "1"}
                mx={isOpen && "2"}
                p={isOpen && "3"}
                _hover={isOpen && { backgroundColor: "accent" }}
                cursor={isOpen && "pointer"}
              >
                <Box
                  className="nav_icon_wrapper"
                  my={isOpen ? "0" : "1"}
                  p={isOpen ? "0" : "3"}
                  lineHeight="8px"
                  bg={!isOpen && "secondary"}
                  borderRadius="xl"
                  cursor="pointer"
                  _hover={{ backgroundColor: "accent" }}
                >
                  <Icon
                    className="nav_icon"
                    boxSize="6"
                    as={icon}
                    color="text"
                  />
                </Box>
                <Text
                  className="nav_title"
                  display={isOpen ? "block" : "none"}
                  opacity={isOpen ? "1" : "0"}
                  transition={isOpen && "visibility 0s, opacity 0.1s linear"}
                  ml="3"
                  color="text"
                >
                  {name}
                </Text>
                <AccordionIcon
                  color="text"
                  display={isOpen ? "block" : "none"}
                  className="accordion_icon"
                />
              </Flex>
            </AccordionButton>
          </NavLink>
          {accordion.map(({ name, path }, index) => (
            <NavLink to={path} key={index}>
              <AccordionPanel
                py={2.5}
                color={"#fff"}
                cursor={"pointer"}
                _hover={{ color: "secondary" }}
              >
                {name}
              </AccordionPanel>
            </NavLink>
          ))}
        </AccordionItem>
      </Accordion>

      {/* Show this when sidebar is close */}
      <Tooltip hasArrow label={name} placement="auto">
        <Box display={!isOpen ? "block" : "none"} px="2">
          <Menu>
            <NavLink to={path}>
              <MenuButton
                className="menu_icon_wrapper"
                my={isOpen ? "0" : "1"}
                p={isOpen ? "0" : "3"}
                lineHeight="8px"
                bg={"secondary"}
                borderRadius="xl"
                cursor="pointer"
                _hover={{ backgroundColor: "accent" }}
              >
                <Icon className="nav_icon" boxSize="6" as={icon} color="text" />
              </MenuButton>
            </NavLink>
            <MenuList>
              {accordion.map(({ name, path }, index) => (
                <NavLink to={path} key={index}>
                  <MenuItem cursor={"pointer"} _hover={{ color: "secondary" }}>
                    {name}
                  </MenuItem>
                </NavLink>
              ))}
            </MenuList>
          </Menu>
        </Box>
      </Tooltip>
    </>
  );
};

export default AccordionSidebar;
