import { Box, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/sidebar/Sidebar";
import SidebarCollapse from "./components/sidebar/SidebarCollapse";

const App = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Flex height="100vh">
      <Box bg="primary" h="100%" w={"5%"} transition={"width .5s"}>
        <Sidebar isOpen={isOpen} />
      </Box>
      <Box
        bg="primary"
        h="100%"
        w={isOpen ? "10%" : "0%"}
        transition={"width .5s"}
      >
        <SidebarCollapse />
      </Box>
      <Box h="100%" w="100%">
        <Header isOpen={isOpen} setOpen={setOpen} />
      </Box>
    </Flex>
  );
};

export default App;
