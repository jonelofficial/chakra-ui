import { useToast } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "react-query";

const UseUpdate = ({ API, HANDLE_SUBMIT, ID, handleClose }) => {
  // To refetch table data
  const queryClient = useQueryClient();
  // To process updating
  const { mutateAsync, isLoading: isMutating } = useMutation(API);
  // For messaging
  const toast = useToast();
  // Function handle updating data
  const onSubmit = HANDLE_SUBMIT(async (data) => {
    try {
      console.log(data);
      const result = await mutateAsync({ ...data, ID });
      if (result) {
        console.log("done");
        queryClient.invalidateQueries("teams");
        handleClose();
        toast({
          title: "Update Team",
          description: "Done Updating team.",
          status: "success",
          duration: 9000,
          isClosable: true,
          position: "bottom-left",
        });
      }
    } catch (error) {
      handleClose();
      toast({
        title: "Error Updating Team",
        description: "Error.",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  });

  return { onSubmit, isMutating };
};

export default UseUpdate;
