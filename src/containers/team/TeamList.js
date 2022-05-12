import { Box, Spinner } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import { getTeams } from "../../api/team/TeamAPI";
import UseFetch from "../../custom_hook/react_query/UseFetch";
import TeamTable from "./TeamTable";

const TeamList = () => {
  const props = {
    DATA_NAME: "teams",
    API: getTeams,
  };
  const { data, isLoading, isError } = UseFetch(props);
  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <Box>Error </Box>;
  }

  return (
    <>
      <Box p="2">
        <TeamTable TEAMDATA={data} />
        <Outlet />
      </Box>
    </>
  );
};

export default TeamList;
