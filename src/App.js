import { Box, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/sidebar/Sidebar";
import SidebarCollapse from "./components/sidebar/SidebarCollapse";

const App = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Flex height="100vh">
      <Sidebar isOpen={isOpen} />
      <Header isOpen={isOpen} setOpen={setOpen} />
    </Flex>
  );
};

export default App;
