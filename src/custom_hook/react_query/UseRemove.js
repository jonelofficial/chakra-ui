import { useToast } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "react-query";

const UseRemove = ({ API, onClose, DATA_NAME }) => {
  // To refetch table data
  const queryClient = useQueryClient();
  // To process deleting
  const { mutateAsync, isLoading } = useMutation(API);
  // For messaging
  const toast = useToast();
  // Function handle remove data
  const remove = async (id) => {
    try {
      // props.row.original.id is the id of row data
      const result = await mutateAsync(id);
      // const id = document.getElementById(id).classList.add("click_delete");
      if (result) {
        queryClient.invalidateQueries(DATA_NAME);
        onClose && onClose();
        toast({
          title: "Delete",
          description: "Done Deleting.",
          status: "success",
          duration: 9000,
          isClosable: true,
          position: "bottom-left",
        });
      }
    } catch (error) {
      onClose && onClose();
      toast({
        title: "Error Deleting",
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
