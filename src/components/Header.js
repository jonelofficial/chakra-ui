import {
  Avatar,
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

const Header = ({ isOpen, setOpen }) => {
  //   const bg = useColorModeValue("primary", "primary");
  const { colorMode } = useColorMode();
  const color = useColorModeValue("gray.800", "#fff");

  console.log(isOpen);

  return (
    <Flex p={2} justifyContent="space-between">
      <Flex alignItems="center">
        <Hamburger
          hideOutline={false}
          rounded
          size={20}
          color={colorMode === "light" ? "#000" : "#fff"}
          toggled={isOpen}
          toggle={setOpen}
        />
        <Text color={color} fontSize="xl" fontWeight="semibold">
          System
        </Text>
      </Flex>
      <Flex alignItems="center">
        <Menu>
          <MenuButton>
            <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
          </MenuButton>
          <MenuList>
            <MenuItem icon={<SettingsIcon />}>Setting</MenuItem>
            <MenuItem icon={<AiOutlineLogout />}>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default Header;
