import { Box, Button, Flex, Icon, Text, useColorMode } from "@chakra-ui/react";
import React, { useState } from "react";
import { navlink } from "../navlink";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import "../styles/style.css";

import Hamburger from "hamburger-react";
import SingleSidebar from "../composition/sidebar/SingleSidebar";
import AccordionSidebar from "../composition/sidebar/AccordionSidebar";

const Sidebar = ({ token }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isOpen, setOpen] = useState(false);

  return (
    <Flex
      bg="primary"
      w={isOpen ? "200px" : "65px"}
      transition={isOpen ? "width .15s" : "width .5s"}
      justifyContent="space-between"
      flexDirection="column"
    >
      <Box>
        <Flex pl="8px">
          <Hamburger toggled={isOpen} toggle={setOpen} color="#fff" size={25} />
        </Flex>
        <Flex flexDirection="column">
          {navlink.map(({ name, icon, path, accordion, defaultShow }, index) =>
            defaultShow && accordion.length ? (
              <AccordionSidebar
                key={index}
                name={name}
                accordion={accordion}
                icon={icon}
                path={path}
                isOpen={isOpen}
              />
            ) : (
              defaultShow &&
              !accordion.length && (
                <SingleSidebar
                  key={index}
                  name={name}
                  icon={icon}
                  path={path}
                  isOpen={isOpen}
                />
              )
            )
          )}
          {navlink.map(({ name, accordion, icon, path, defaultShow }, index) =>
            token.priviledge.map((index) =>
              index === name.toUpperCase() && accordion.length ? (
                <AccordionSidebar
                  key={index}
                  name={name}
                  accordion={accordion}
                  icon={icon}
                  path={path}
                  isOpen={isOpen}
                />
              ) : (
                index === name.toUpperCase() &&
                !accordion.length && (
                  <SingleSidebar
                    key={index}
                    name={name}
                    icon={icon}
                    path={path}
                    isOpen={isOpen}
                  />
                )
              )
            )
          )}
        </Flex>
      </Box>
      <Box p="2">
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? <BsFillSunFill /> : <BsFillMoonFill />}
        </Button>
      </Box>
    </Flex>
  );
};

export default Sidebar;
