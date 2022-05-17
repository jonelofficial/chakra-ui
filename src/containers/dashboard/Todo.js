import { Box, Button, Flex, Input, Spinner } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { updateTodolist } from "../../api/todolist/TodolistAPI";
import UseUpdate from "../../custom_hook/react_query/UseUpdate";

const Todo = ({ todo, isMutating, id }) => {
  const [edit, setEdit] = useState(false);

  // HANDLE FORM SUBMIT
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    onSubmitEdit(data);
  };
  //

  // UPDATE
  const initialPropsUpdate = {
    API: updateTodolist,
    ID: id,
    setEdit: setEdit,
    reset: reset,
  };
  const { onSubmitEdit, isMutating: isLoading } = UseUpdate(initialPropsUpdate);
  //

  return (
    <Flex justifyContent="space-between" justifyItems="center">
      {!edit ? (
        <>
          {todo}
          <Flex
            alignItems="center"
            justifyContent="space-between"
            onClick={(e) => e.stopPropagation()}
          >
            {isMutating && <Spinner mr="2" d="none" className="spinner" />}
            <Button
              className="button_hover"
              colorScheme="teal"
              d="none"
              size="xs"
              mr="2"
              onClick={() => setEdit(!edit)}
            >
              Edit
            </Button>
          </Flex>
        </>
      ) : (
        <form
          style={{ width: "100%" }}
          onSubmit={handleSubmit(onSubmit)}
          onClick={(e) => e.stopPropagation()}
        >
          <Flex>
            <Input
              autoFocus
              defaultValue={todo}
              {...register("todo", { required: true })}
              placeholder="Enter todolist"
            />
            <Input d="none" defaultValue={true} {...register("status")} />
            <Input d="none" defaultValue={id} {...register("id")} />

            <Flex alignItems="center">
              <Button
                className="button_hover"
                colorScheme="orange"
                ml="2"
                size="xs"
                onClick={() => setEdit(false)}
              >
                Cancel
              </Button>
              <Button
                className="button_hover"
                colorScheme="teal"
                ml="2"
                type="submit"
                size="xs"
                mr="2"
                isLoading={isLoading}
              >
                Save
              </Button>
              {isMutating && <Spinner ml="2" d="none" className="spinner" />}
            </Flex>
          </Flex>
          {errors.todo && (
            <Box p="2" color="red" fontSize="xs" textAlign="center">
              This field is required
            </Box>
          )}
        </form>
      )}
    </Flex>
  );
};

export default Todo;
