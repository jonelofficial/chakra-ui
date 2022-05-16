import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Input,
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
import UseCreate from "../custom_hook/react_query/UseCreate";
import UseFetch from "../custom_hook/react_query/UseFetch";
import UseUpdate from "../custom_hook/react_query/UseUpdate";

const Dashboard = () => {
  const bg = useColorModeValue("accent", "#25252599");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    onFormSubmit(data);
  };
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

  // GET
  const initialProps = {
    API: getTodolists,
    DATA_NAME: "todolists",
  };
  const { data, isLoading, isError } = UseFetch(initialProps);
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

          <form onSubmit={handleSubmit(onSubmit)}>
            <Flex>
              <Input
                {...register("todo", { required: true })}
                placeholder="Enter todolist"
              />
              <Input d="none" defaultValue={true} {...register("status")} />

              <Button
                colorScheme="blue"
                ml="3"
                type="submit"
                isLoading={createIsLoading}
              >
                Add
              </Button>
            </Flex>
            {errors.todo && (
              <Box p="2" color="red" fontSize="xs" textAlign="center">
                This field is required
              </Box>
            )}
          </form>
        </Box>
        <Box mt="3" overflow="auto" maxH="30em">
          {data.reverse().map(
            ({ todo, status, id }, index) =>
              status && (
                <Tooltip
                  key={index}
                  label="Click to finish"
                  hasArrow
                  placement="right"
                >
                  <Box
                    p="2"
                    id={id}
                    onClick={() => handleClickTodo(id, data)}
                    cursor="pointer"
                    _hover={{ bg: "accent", color: "gray" }}
                  >
                    <Flex justifyContent="space-between" justifyItems="center">
                      {todo}
                      {isMutating && <Spinner d="none" className="spinner" />}
                    </Flex>
                  </Box>
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
                  placement="right"
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
