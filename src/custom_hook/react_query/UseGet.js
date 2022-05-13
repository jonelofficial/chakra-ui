import React from "react";
import { useQuery } from "react-query";

const UseGet = ({ PARAMETER, API, DATA_NAME }) => {
  const { data, isLoading, isError } = useQuery(
    [DATA_NAME, { PARAMETER }],
    API,
    {
      cacheTime: 0,
    }
  );
  return { data, isLoading, isError };
};

export default UseGet;
