import {
  Box,
  Button,
  Center,
  Circle,
  Flex,
  Icon,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { navlink } from "../../navlink";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const Sidebar = ({ isOpen }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      h="100vh"
      flexDirection="column"
      justifyContent="space-between"
      alignItems={"center"}
    >
      <Box whiteSpace="nowrap">
        <Center color="text" h="4em">
          LOGO
        </Center>
        <VStack>
          {navlink.map(({ icon }) => (
            <Circle size="40px" bg="secondary">
              <Icon as={icon} boxSize={5} style={{ color: "#fff" }} />
            </Circle>
          ))}
        </VStack>
      </Box>
      <Box>
        <Button
          size="sm"
          onClick={toggleColorMode}
          borderRadius="full"
          mb="3"
          h="37px"
        >
          {colorMode === "light" ? <BsFillSunFill /> : <BsFillMoonFill />}
        </Button>
      </Box>
    </Flex>
  );
};

export default Sidebar;
