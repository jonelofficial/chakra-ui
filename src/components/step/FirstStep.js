import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { MultiStepContext } from "../StepContext";

const FirstStep = () => {
  const { setStep, userData, setUserData, errors, register } =
    useContext(MultiStepContext);

  return (
    <Box w="100%">
      <FormControl>
        <FormControl variant="floating" mb="4" isInvalid={errors.firstName}>
          <Input
            {...register("firstName")}
            id="firstName"
            type="text"
            placeholder=" "
            defaultValue={userData["firstName"]}
            onChange={(e) =>
              setUserData({ ...userData, firstName: e.target.value })
            }
          />
          <FormLabel color="gray">First Name</FormLabel>
          <FormErrorMessage>
            {errors.firstName && errors.firstName.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl variant="floating" mb="4" isInvalid={errors.lastName}>
          <Input
            {...register("lastName")}
            id="lastName"
            type="text"
            placeholder=" "
            defaultValue={userData["lastName"]}
            onChange={(e) =>
              setUserData({ ...userData, lastName: e.target.value })
            }
          />
          <FormLabel color="gray">Last Name</FormLabel>
          <FormErrorMessage>
            {errors.lastName && errors.lastName.message}
          </FormErrorMessage>
        </FormControl>

        <Box textAlign="right">
          <Button
            disabled={
              errors.firstName ||
              errors.lastName ||
              userData["firstName"] === undefined ||
              userData["lastName"] === undefined
            }
            colorScheme="blue"
            size="sm"
            onClick={() => setStep(2)}
          >
            Next
          </Button>
        </Box>
      </FormControl>
    </Box>
  );
};

export default FirstStep;
