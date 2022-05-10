import {
  Avatar,
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { SettingsIcon } from "@chakra-ui/icons";
import Hamburger from "hamburger-react";
import { useNavigate } from "react-router-dom";

const Header = ({ token }) => {
  //   const bg = useColorModeValue("primary", "primary");
  const { colorMode } = useColorMode();
  const color = useColorModeValue("gray.800", "#fff");
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload(true);
  };

  return (
    <Box w="100%" h="auto">
      <Flex p={2} justifyContent="space-between">
        <Flex alignItems="center">
          <Text color={color} fontSize="xl" fontWeight="semibold">
            System Title
          </Text>
        </Flex>

        <Flex alignItems="center">
          <Text fontSize="lg" fontWeight="semibold" mr="3">
            Hello {token.firstName}
          </Text>
          <Menu>
            <MenuButton>
              <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
            </MenuButton>
            <MenuList>
              <MenuItem icon={<SettingsIcon />}>Setting</MenuItem>
              <MenuItem icon={<AiOutlineLogout />} onClick={handleLogout}>
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
