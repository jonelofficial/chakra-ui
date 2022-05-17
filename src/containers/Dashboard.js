import {
  Box,
  Center,
  Flex,
  Heading,
  Spinner,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import {
  createTodo,
  getTodolists,
  updateTodolist,
} from "../api/todolist/TodolistAPI";
import ButtonDelete from "../composition/ButtonDelete";
import UseCreate from "../custom_hook/react_query/UseCreate";
import UseFetch from "../custom_hook/react_query/UseFetch";
import UseUpdate from "../custom_hook/react_query/UseUpdate";
import Form from "./dashboard/Form";
import Todo from "./dashboard/Todo";

const Dashboard = () => {
  const bg = useColorModeValue("accent", "#25252599");
  // HANDLE FORM SUBMIT
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    onFormSubmit(data);
  };
  //

  // UPDATE
  const initialPropsUpdate = { API: updateTodolist };
  const { handleClickTodo, handleClickDoneTodo, isMutating } =
    UseUpdate(initialPropsUpdate);
  //

  // CREATE
  const initialPropsCreate = {
    API: createTodo,
    CLEAR_INPUT: reset,
  };
  const { onFormSubmit, createIsLoading } = UseCreate(initialPropsCreate);
  //

  // GET TODOLIST
  const initialPropsGet = {
    API: getTodolists,
    DATA_NAME: "todolists",
  };
  const { data, isLoading, isError } = UseFetch(initialPropsGet);
  if (isLoading) {
    return (
      <Center h="100%">
        <Spinner />
      </Center>
    );
  }
  if (isError) {
    return (
      <Center h="100%">
        <Box>Error </Box>
      </Center>
    );
  }
  //

  return (
    <Center h="100%">
      <Box h="100%" w="50em" p="2">
        <Box>
          <Heading size="md" textAlign="center" mb="3">
            Todolist
          </Heading>
          <Form
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            register={register}
            createIsLoading={createIsLoading}
            errors={errors}
          />
        </Box>
        <Box mt="3" overflowY="auto" maxH="30em">
          {data.reverse().map(
            ({ todo, status, id }, index) =>
              status && (
                <Tooltip
                  key={index}
                  label="Click to finish"
                  hasArrow
                  placement="left"
                >
                  <Flex
                    p="2"
                    className="todo"
                    alignItems="center"
                    _hover={{ bg: "accent", color: "gray" }}
                  >
                    <Box
                      w="100%"
                      id={id}
                      cursor="pointer"
                      onClick={() => handleClickTodo(id, data)}
                    >
                      {/* insert Todo */}
                      <Todo todo={todo} isMutating={isMutating} id={id} />
                    </Box>
                    <Flex
                      alignItems="center"
                      mr="2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ButtonDelete id={id} />
                    </Flex>
                  </Flex>
                </Tooltip>
              )
          )}
          {data.reverse().map(
            ({ todo, status, id }, index) =>
              !status && (
                <Tooltip
                  key={index}
                  label="Click to unfinish"
                  hasArrow
                  placement="left"
                >
                  <Box
                    id={id}
                    textDecoration="line-through"
                    p="2"
                    bg={bg}
                    color="gray"
                    onClick={() => handleClickDoneTodo(id, data)}
                    cursor="pointer"
                    _hover={{ bg: "accent" }}
                  >
                    <Flex justifyContent="space-between" justifyItems="center">
                      {todo}
                      {isMutating && <Spinner d="none" className="spinner" />}
                    </Flex>
                  </Box>
                </Tooltip>
              )
          )}
        </Box>
      </Box>
    </Center>
  );
};

export default Dashboard;
