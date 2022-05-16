import React from "react";
import { useMutation, useQueryClient } from "react-query";

const UseCreate = ({ API, CLEAR_INPUT }) => {
  // To refetch table data
  const queryClient = useQueryClient();
  // To process updating
  const { mutateAsync, isLoading: createIsLoading } = useMutation(API);
  const onFormSubmit = async (data) => {
    try {
      const result = await mutateAsync(data);
      if (result) {
        queryClient.invalidateQueries("todolists");
        CLEAR_INPUT();
      }
    } catch (error) {
      console.log("USECREATE ERROR: ", error);
    }
  };
  return { onFormSubmit, createIsLoading };
};

export default UseCreate;
