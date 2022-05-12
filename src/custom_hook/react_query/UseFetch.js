import { useQuery } from "react-query";

const UseFetch = ({ API, DATA_NAME }) => {
  const { data, isLoading, isError } = useQuery(DATA_NAME, API);
  if (isLoading) console.log("UseFetch rendered isLoading ");
  if (isError) console.log("UseFetch rendered isError ");
  if (data) console.log("UseFetch rendered data ");
  return {
    data,
    isLoading,
    isError,
  };
};

export default UseFetch;
