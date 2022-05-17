import { Box, Button, Center, Spinner } from "@chakra-ui/react";
import React from "react";
import { useQuery } from "react-query";
import { getTodo } from "../api/todolist/TodolistAPI";

const ButtonEdit = ({ id, edit, setEdit }) => {
  return (
    <Button
      className="button_hover"
      //   d="none"
      colorScheme="teal"
      size="xs"
      mr="2"
      onClick={() => setEdit(!edit)}
    >
      {edit ? "Save" : "Edit"}
    </Button>
  );
};

export default ButtonEdit;
