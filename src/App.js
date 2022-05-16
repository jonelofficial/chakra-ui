import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import UserToken from "./auth/UserToken";

// Main Components
import Header from "./components/Header";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";

// Routes
import Dashboard from "./containers/Dashboard";
import Team from "./containers/team/Team";
import TeamList from "./containers/team/TeamList";
import Calendar from "./containers/Calendar";
import Request from "./containers/Request";
import Support from "./containers/Support";
import { QueryClient, QueryClientProvider } from "react-query";

// Style
import "./styles/style.css";
import EditTeam from "./containers/team/EditTeam";

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  const { token, setToken } = UserToken();

  if (!token) {
    return <Login setToken={setToken} token={token} />;
  }
  return (
    <Flex h="100vh" overflow="hidden">
      <Sidebar token={token} />
      <Flex flexDirection="column" w="100%">
        <Header token={token} />
        <QueryClientProvider client={queryClient}>
          <Box w="100%" h="100%">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/team/team-list" element={<TeamList />}>
                <Route
                  path="/team/team-list/edit-team/:id"
                  element={<EditTeam />}
                />
              </Route>
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/request" element={<Request />} />
              <Route path="/support" element={<Support />} />
            </Routes>
          </Box>
        </QueryClientProvider>
      </Flex>
    </Flex>
  );
};

export default App;
