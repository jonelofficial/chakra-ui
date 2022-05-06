import {
  Box,
  Button,
  Circle,
  Flex,
  Icon,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { navlink } from "../../navlink";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

import "../../styles/style.css";

const Sidebar = ({ isOpen }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      overflowY="auto"
      overflowX="hidden"
      flexDirection="column"
      bg="primary"
    >
      <Box borderBottom="1px solid rgba(179,184,212,.2)">
        <Text
          color="text"
          textTransform="uppercase"
          fontWeight="bold"
          letterSpacing="1px"
          overflow="hidden"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
          p="14px"
        >
          Logo
        </Text>
      </Box>
      <Box flexGrow="1">
        <VStack pt="20px">
          {navlink.map(({ icon }) => (
            <Circle size="40px" bg="secondary" className="sidebar">
              <Icon
                as={icon}
                boxSize={5}
                style={{ color: "#fff" }}
                className="sidebar-icon"
              />
            </Circle>
          ))}
        </VStack>
      </Box>
      <Box borderTop="1px solid rgba(179,184,212,.2)">
        <VStack p="14px">
          <Button
            size="sm"
            onClick={toggleColorMode}
            borderRadius="full"
            h="37px"
          >
            {colorMode === "light" ? <BsFillSunFill /> : <BsFillMoonFill />}
          </Button>
        </VStack>
      </Box>
    </Flex>
  );
};

export default Sidebar;
