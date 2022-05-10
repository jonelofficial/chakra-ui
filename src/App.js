import { Box, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/sidebar/Sidebar";

import "./styles/style.css";

const App = () => {
  return (
    <Flex height="100vh">
      <Sidebar />
      {/* <Header isOpen={isOpen} setOpen={setOpen} /> */}
    </Flex>
  );
};

export default App;
