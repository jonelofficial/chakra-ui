import { Button } from "@chakra-ui/react";
import React from "react";
import { deleteTodo } from "../api/todolist/TodolistAPI";
import UseRemove from "../custom_hook/react_query/UseRemove";

const ButtonDelete = ({ id }) => {
  const initialPropsRemove = { API: deleteTodo, DATA_NAME: "todolists" };
  const { remove, isLoading: removeIsLoading } = UseRemove(initialPropsRemove);
  return (
    <Button
      className="button_hover"
      d="none"
      colorScheme="red"
      size="xs"
      isLoading={removeIsLoading}
      onClick={() => remove(id)}
    >
      Delete
    </Button>
  );
};

export default ButtonDelete;
