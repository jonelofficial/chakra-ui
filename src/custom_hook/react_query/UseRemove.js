import { useToast } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "react-query";

const UseRemove = ({ API, ID, onClose }) => {
  // To refetch table data
  const queryClient = useQueryClient();
  // To process deleting
  const { mutateAsync, isLoading } = useMutation(API);
  // For messaging
  const toast = useToast();
  // Function handle remove data
  const remove = async () => {
    try {
      // props.row.original.id is the id of row data
      const result = await mutateAsync(ID);
      if (result) {
        queryClient.invalidateQueries("teams");
        onClose();
        toast({
          title: "Delete Team",
          description: "Done Deleting team.",
          status: "success",
          duration: 9000,
          isClosable: true,
          position: "bottom-left",
        });
      }
    } catch (error) {
      onClose();
      toast({
        title: "Error Deleting Team",
        description: "Error.",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };
  return { remove, isLoading };
};

export default UseRemove;
