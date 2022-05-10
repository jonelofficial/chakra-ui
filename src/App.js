import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import UserToken from "./auth/UserToken";
import Header from "./components/Header";
import Login from "./components/Login";
import Sidebar from "./components/sidebar/Sidebar";

// Routes
import Dashboard from "./containers/Dashboard";
import Team from "./containers/team/Team";
import TeamList from "./containers/team/TeamList";
import Calendar from "./containers/Calendar";
import Request from "./containers/Request";
import Support from "./containers/Support";

// Style
import "./styles/style.css";

const App = () => {
  const { token, setToken } = UserToken();

  if (!token) {
    return <Login setToken={setToken} token={token} />;
  }
  return (
    <Flex h="100vh" overflow="hidden">
      <Sidebar token={token} />
      <Box w="100%">
        <Header token={token} />
        <Box w="100%" h="100%">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/team" element={<Team />} />
            <Route path="/team/team-list" element={<TeamList />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/request" element={<Request />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </Box>
      </Box>
    </Flex>
  );
};

export default App;
