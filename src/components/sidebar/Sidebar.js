import {
  Avatar,
  Box,
  Flex,
  Icon,
  Input,
  Text,
  Tooltip,
  useColorMode,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { navlink } from "../../navlink";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

import "../../styles/style.css";
import Hamburger from "hamburger-react";
import { SearchIcon, SettingsIcon } from "@chakra-ui/icons";

const Sidebar = ({ isOpen, setOpen }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const [search, setSearch] = useState();

  return (
    <Box bg="primary" h="100%" w="240px" pos="fixed" top="0" p="6px 14px">
      <Flex alignItems="center">
        {/* logo_content */}
        <Flex alignItems="center" h="50px" w="100%">
          {/* logo */}
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" mr="3" />
          <Text color="text" fontSize="lg">
            Logo Name
          </Text>
        </Flex>
        <Hamburger
          hideOutline={false}
          rounded
          size={20}
          color={"#fff"}
          toggled={isOpen}
          toggle={setOpen}
        />
      </Flex>
      <Flex flexDirection="column" mt="20px">
        <Flex alignItems="center">
          <SearchIcon boxSize={6} color="#fff" mr="3" />
          <Input
            color="text"
            type="text"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Flex>
        {navlink.map(({ icon, name }) => (
          <Flex alignItems="center" pos="relative" h="50px" w="100%">
            <Icon as={icon} boxSize={8} style={{ color: "#fff" }} mr="3" />
            <Text color="text">{name}</Text>
            {/* <Text color="text" className="tooltip">
              {name}
            </Text> */}
          </Flex>
        ))}
      </Flex>
      <Box>
        <Box>
          <Box>
            <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
            <Box>
              <Text color="text">Jonel</Text>
              <Text color="text">Web Developer</Text>
            </Box>
          </Box>
          <SettingsIcon boxSize={8} color="text" />
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
