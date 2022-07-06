import { Box } from "@chakra-ui/react";
import React, { createContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Team from "../containers/team/Team";
import { formSchema } from "../schema/Schema";
import { useMutation } from "react-query";
import { createTeam } from "../api/team/TeamAPI";

export const MultiStepContext = createContext();

const StepContext = () => {
  const [currentStep, setStep] = useState(1);
  const [userData, setUserData] = useState([]);
  const [finalData, setFinalData] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(formSchema),
  });

  const { mutateAsync, isLoading } = useMutation(createTeam);

  const onSubmit = () => {
    // setFinalData((finalData) => [...finalData, userData]);
    try {
      const result = mutateAsync(userData);
      if (result) {
        console.log(userData);
        console.log("success");
        setUserData([]);
        reset();
        setStep(1);
      }
    } catch (error) {
      console.log("ONSUBMIT ERROR: ", error);
    }
  };
  return (
    <Box>
      <MultiStepContext.Provider
        value={{
          currentStep,
          userData,
          finalData,
          setStep,
          setUserData,
          setFinalData,
          onSubmit,
          handleSubmit,
          errors,
          register,
          control,
          isLoading,
        }}
      >
        <Team />
      </MultiStepContext.Provider>
    </Box>
  );
};

export default StepContext;
