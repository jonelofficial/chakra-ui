import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Controller } from "react-hook-form";
import { MultiStepContext } from "../StepContext";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ThirdStep = () => {
  const {
    setStep,
    userData,
    setUserData,
    errors,
    register,
    control,
    isLoading,
  } = useContext(MultiStepContext);

  return (
    <Box w="100%">
      <FormControl>
        <FormControl variant="floating" mb="4" isInvalid={errors.teamGroup}>
          <Select
            {...register("teamGroup")}
            id="teamGroup"
            required
            defaultValue={userData["teamGroup"]}
            placeholder="Select Team"
            onChange={(e) =>
              setUserData({ ...userData, teamGroup: e.target.value })
            }
          >
            {/* <option value="" disabled>
              Select Team
            </option> */}
            <option value="Team Red" id="teamRed">
              Team Red
            </option>
            <option value="Team Blue" id="teamBlue">
              Team Blue
            </option>
            <option value="Team Green" id="teamGreen">
              Team Green
            </option>
          </Select>
          <FormLabel color="gray">Team Group</FormLabel>
          <FormErrorMessage>
            {errors.teamGroup && errors.teamGroup.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl variant="floating" mb="4" isInvalid={errors.datePicker}>
          {/* <Input
            {...register("datePicker")}
            id="datePicker"
            type="text"
            placeholder=" "
            onFocus={(e) => (e.target.type = "datetime-local")}
            onBlur={(e) => (e.target.type = "text")}
            defaultValue={userData["datePicker"]}
            onChange={(e) =>
              setUserData({ ...userData, datePicker: e.target.value })
            }
          /> */}

          <Controller
            control={control}
            name="datePicker"
            render={({ field }) => (
              <DatePicker
                {...register("datePicker")}
                todayButton="Today"
                dateFormat="MM/dd/yyyy"
                onBlur={() => field.onChange("")}
                placeholderText="Date"
                className="datePicker"
                autoComplete="off"
                selected={field.value}
                onChange={(date) => {
                  field.onChange(date);
                  setUserData({ ...userData, datePicker: date });
                }}
              />
            )}
          />
          {/* <FormLabel color="gray">Date</FormLabel> */}
          <FormErrorMessage>
            {errors.datePicker && errors.datePicker.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl mb="4" isInvalid={errors.compliance}>
          <Checkbox
            {...register("compliance")}
            id="compliance"
            defaultChecked={userData["compliance"]}
            onChange={(e) =>
              setUserData({ ...userData, compliance: !userData["compliance"] })
            }
          >
            <Text fontSize="sm">
              I hereby agree to store and use my personal information
            </Text>
          </Checkbox>
          <FormErrorMessage>
            {errors.compliance && errors.compliance.message}
          </FormErrorMessage>
        </FormControl>

        <Box textAlign="right">
          <Button
            colorScheme="orange"
            size="sm"
            mr="3"
            onClick={() => setStep(2)}
          >
            Back
          </Button>
          <Button
            isLoading={isLoading}
            colorScheme="blue"
            size="sm"
            type="submit"
          >
            Submit
          </Button>
        </Box>
      </FormControl>
    </Box>
  );
};

export default ThirdStep;
