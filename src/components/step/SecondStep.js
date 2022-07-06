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

const SecondStep = () => {
  const { setStep, userData, setUserData, errors, register } =
    useContext(MultiStepContext);

  return (
    <Box w="100%">
      <FormControl>
        <FormControl variant="floating" mb="4" isInvalid={errors.email}>
          <Input
            {...register("email")}
            id="email"
            type="email"
            placeholder=" "
            defaultValue={userData["email"]}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
          <FormLabel color="gray">Email</FormLabel>
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl variant="floating" mb="4" isInvalid={errors.phoneNumber}>
          <Input
            {...register("phoneNumber")}
            id="phoneNumber"
            type="number"
            placeholder=" "
            defaultValue={userData["phoneNumber"]}
            onChange={(e) =>
              setUserData({ ...userData, phoneNumber: e.target.value })
            }
          />
          <FormLabel color="gray">Phone Number</FormLabel>
          <FormErrorMessage>
            {errors.phoneNumber && errors.phoneNumber.message}
          </FormErrorMessage>
        </FormControl>

        <Box textAlign="right">
          <Button
            colorScheme="orange"
            size="sm"
            mr="3"
            onClick={() => setStep(1)}
          >
            Back
          </Button>
          <Button
            disabled={
              errors.email ||
              errors.phoneNumber ||
              userData["email"] === undefined ||
              userData["phoneNumber"] === undefined
            }
            colorScheme="blue"
            size="sm"
            onClick={() => setStep(3)}
          >
            Next
          </Button>
        </Box>
      </FormControl>
    </Box>
  );
};

export default SecondStep;
