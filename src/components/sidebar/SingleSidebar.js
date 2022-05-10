import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

const SingleSidebar = ({ name, icon, path, isOpen }) => {
  return (
    <NavLink to={path}>
      <Flex
        className="nav_wrapper"
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
          <Icon className="nav_icon" boxSize="6" as={icon} color="text" />
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
      </Flex>
    </NavLink>
  );
};

export default SingleSidebar;
