import { useQuery } from "react-query";

const UseFetch = ({ API, DATA_NAME }) => {
  const { data, isLoading, isError } = useQuery(DATA_NAME, API);
  return {
    data,
    isLoading,
    isError,
  };
};

export default UseFetch;
