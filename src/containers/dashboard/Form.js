import { Box, Button, Flex, Input } from "@chakra-ui/react";
import React from "react";

const Form = ({
  handleSubmit,
  onSubmit,
  register,
  createIsLoading,
  errors,
}) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex>
        <Input
          {...register("todo", { required: true })}
          placeholder="Enter todolist"
        />
        <Input d="none" defaultValue={true} {...register("status")} />

        <Button
          px="12"
          colorScheme="blue"
          ml="3"
          type="submit"
          isLoading={createIsLoading}
        >
          Add Todo
        </Button>
      </Flex>
      {errors.todo && (
        <Box p="2" color="red" fontSize="xs" textAlign="center">
          This field is required
        </Box>
      )}
    </form>
  );
};

export default Form;
