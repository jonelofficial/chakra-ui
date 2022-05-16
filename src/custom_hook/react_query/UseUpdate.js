import { useToast } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "react-query";

const UseUpdate = ({ API, HANDLE_SUBMIT, ID, handleClose }) => {
  // To refetch table data
  const queryClient = useQueryClient();
  // To process updating
  const { mutateAsync, isLoading: isMutating } = useMutation(API);
  // For messaging
  const toast = useToast();
  // Function handle updating data from form
  const onSubmit =
    HANDLE_SUBMIT &&
    HANDLE_SUBMIT(async (data) => {
      try {
        const result = await mutateAsync({ ...data, ID });
        if (result) {
          console.log("done");
          queryClient.invalidateQueries("teams");
          handleClose && handleClose();
          toast({
            title: "Update",
            description: "Done Updating.",
            status: "success",
            duration: 9000,
            isClosable: true,
            position: "bottom-left",
          });
        }
      } catch (error) {
        handleClose && handleClose();
        toast({
          title: "Error Updating",
          description: "Error.",
          status: "error",
          duration: 9000,
          isClosable: true,
          position: "bottom-left",
        });
      }
    });

  const handleClickTodo = async (ID, data) => {
    const newData = { todo: data[ID - 1]["todo"], status: false, id: ID };
    document.getElementById(ID).classList.add("click_todo");
    try {
      const result = await mutateAsync({ ...newData, ID });
      if (result) {
        queryClient.invalidateQueries("todolists");
        handleClose && handleClose();
        toast({
          title: "Update",
          description: "Done Updating.",
          status: "success",
          duration: 9000,
          isClosable: true,
          position: "bottom-left",
        });
      }
    } catch (error) {
      handleClose && handleClose();
      toast({
        title: "Error Updating",
        description: "Error.",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  const handleClickDoneTodo = async (ID, data) => {
    const newData = { todo: data[ID - 1]["todo"], status: true, id: ID };
    document.getElementById(ID).classList.add("click_untodo");
    try {
      const result = await mutateAsync({ ...newData, ID });
      if (result) {
        queryClient.invalidateQueries("todolists");
        handleClose && handleClose();
        toast({
          title: "Update",
          description: "Done Updating.",
          status: "success",
          duration: 9000,
          isClosable: true,
          position: "bottom-left",
        });
      }
    } catch (error) {
      handleClose && handleClose();
      toast({
        title: "Error Updating",
        description: "Error.",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };
  return { onSubmit, isMutating, handleClickTodo, handleClickDoneTodo };
};

export default UseUpdate;
