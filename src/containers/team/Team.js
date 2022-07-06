import { Box, Center, Flex, Heading, Progress } from "@chakra-ui/react";
import React, { useContext } from "react";
import FirstStep from "../../components/step/FirstStep";
import SecondStep from "../../components/step/SecondStep";
import ThirdStep from "../../components/step/ThirdStep";
import { MultiStepContext } from "../../components/StepContext";

const Team = () => {
  const { currentStep, onSubmit, handleSubmit } = useContext(MultiStepContext);

  const FormTitle = [
    "Personal Information",
    "Contact Information",
    "Choose Team",
  ];

  const showStep = (step) => {
    switch (step) {
      case 1:
        return <FirstStep />;
      case 2:
        return <SecondStep />;
      case 3:
        return <ThirdStep />;
      default:
        return <FirstStep />;
    }
  };

  return (
    <Box p="2" w="25em" m="auto">
      <Heading fontWeight="medium" size="md" textAlign="center" mb="3">
        {FormTitle[currentStep - 1]}
      </Heading>
      <Progress colorScheme="green" value={currentStep} max={3} mb="6" />

      <Center>
        <Flex flexDirection="column" w="100%">
          <form onSubmit={handleSubmit(onSubmit)}>{showStep(currentStep)}</form>
        </Flex>
      </Center>
    </Box>
  );
};

export default Team;
