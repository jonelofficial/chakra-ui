import {
  Box,
  Button,
  Center,
  Checkbox,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  Spinner,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTeam, removeTeam, updateTeam } from "../../api/team/TeamAPI";
import UseGet from "../../custom_hook/react_query/UseGet";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../../schema/Schema";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import UseUpdate from "../../custom_hook/react_query/UseUpdate";

const EditTeam = () => {
  const { id } = useParams();

  //For Drawer
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  const navigate = useNavigate();
  const handleClose = () => {
    navigate("/team/team-list");
  };
  //

  //Getting data
  const props = {
    DATA_NAME: "team",
    PARAMETER: id,
    API: getTeam,
    handleClose: handleClose,
  };
  const { data, isLoading, isError } = UseGet(props);
  //

  // React Hook Form
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(formSchema),
  });
  //

  // Handle Submit Form
  const initialProps = {
    API: updateTeam,
    HANDLE_SUBMIT: handleSubmit,
    ID: id,
    handleClose: handleClose,
  };
  const { onSubmit, isMutating } = UseUpdate(initialProps);
  //

  return (
    <>
      <Drawer
        onOverlayClick={handleClose}
        onEsc={handleClose}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent overflow="auto">
          {isLoading ? (
            <Center h="100%">
              <Spinner />
            </Center>
          ) : isError ? (
            <Center h="100%">
              <Box>Error</Box>
            </Center>
          ) : (
            <>
              <DrawerCloseButton onClick={handleClose} />
              <DrawerHeader borderBottomWidth="1px" textAlign="center">
                Edit Team
              </DrawerHeader>

              <DrawerBody>
                <form onSubmit={onSubmit}>
                  <FormControl>
                    <FormLabel htmlFor="firstName">First Name</FormLabel>
                    <Input
                      {...register("firstName")}
                      id="firstName"
                      placeholder="Enter first name..."
                      defaultValue={data.firstName}
                      borderColor={errors.firstName && "red"}
                    />
                    <FormHelperText
                      display={errors.firstName ? "block" : "none"}
                      color="red"
                      fontSize="sm"
                      mb={2}
                    >
                      {errors.firstName && errors.firstName.message}
                    </FormHelperText>

                    {/*  FIRST NAME END */}

                    <FormLabel htmlFor="lastName" mt="3">
                      Last Name
                    </FormLabel>
                    <Input
                      {...register("lastName")}
                      id="lastName"
                      placeholder="Enter last name..."
                      defaultValue={data.lastName}
                      borderColor={errors.lastName && "red"}
                    />
                    <FormHelperText
                      display={errors.lastName ? "block" : "none"}
                      color="red"
                      fontSize="sm"
                      mb={2}
                    >
                      {errors.lastName && errors.lastName.message}
                    </FormHelperText>

                    {/*  LAST NAME END */}

                    <FormLabel htmlFor="email" mt="3">
                      Email
                    </FormLabel>
                    <Input
                      {...register("email")}
                      id="email"
                      placeholder="Enter email..."
                      defaultValue={data.email}
                      borderColor={errors.email && "red"}
                    />
                    <FormHelperText
                      display={errors.email ? "block" : "none"}
                      color="red"
                      fontSize="sm"
                      mb={2}
                    >
                      {errors.email && errors.email.message}
                    </FormHelperText>

                    {/*  EMAIL END */}

                    <FormLabel htmlFor="phoneNumber" mt="3">
                      Phone Number
                    </FormLabel>
                    <InputGroup>
                      <InputLeftAddon children="+63" />
                      <Input
                        {...register("phoneNumber")}
                        id="phoneNumber"
                        placeholder="9xxxxxxxxx"
                        defaultValue={data.phoneNumber}
                        maxLength={10}
                        mb={3}
                        borderColor={errors.phoneNumber && "red"}
                      />
                    </InputGroup>
                    <FormHelperText
                      display={errors.phoneNumber ? "block" : "none"}
                      color="red"
                      fontSize="sm"
                      mb={2}
                    >
                      {errors.phoneNumber && errors.phoneNumber.message}
                    </FormHelperText>

                    {/*  PHONE NUMBER END */}

                    <FormLabel htmlFor="teamGroup" mt="3">
                      Team Group
                    </FormLabel>
                    <Select
                      {...register("teamGroup")}
                      id={"teamGroup"}
                      defaultValue={data.teamGroup}
                      placeholder="Select Team"
                      mb={3}
                      borderColor={errors.teamGroup && "red"}
                    >
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
                    <FormHelperText
                      display={errors.teamGroup ? "block" : "none"}
                      color="red"
                      fontSize="sm"
                      mb={2}
                    >
                      {errors.teamGroup && errors.teamGroup.message}
                    </FormHelperText>

                    {/*  TEAM GROUP END */}

                    <FormLabel htmlFor="datepicker" mt="3">
                      Date
                    </FormLabel>
                    <Controller
                      control={control}
                      name="datePicker"
                      render={({ field }) => (
                        <DatePicker
                          {...register("datePicker")}
                          todayButton="Today"
                          dateFormat="MM/dd/yyyy"
                          isClearable
                          placeholderText="New date"
                          className="datePicker"
                          selected={field.value}
                          onChange={(date) => field.onChange(date)}
                        />
                      )}
                    />
                    <FormHelperText
                      display={errors.datePicker ? "block" : "none"}
                      color="red"
                      fontSize="sm"
                      mb={2}
                    >
                      {errors.datePicker && errors.datePicker.message}
                    </FormHelperText>

                    {/*  DATEPICKER END */}

                    <Checkbox
                      display="none"
                      {...register("compliance")}
                      id="compliance"
                      defaultChecked={true}
                    >
                      I hereby agree to store and use my personal information
                    </Checkbox>
                  </FormControl>
                </form>
              </DrawerBody>

              <DrawerFooter borderTopWidth="1px">
                <Button variant="outline" mr={3} onClick={handleClose}>
                  Cancel
                </Button>
                <Button
                  isLoading={isMutating}
                  colorScheme="blue"
                  onClick={onSubmit}
                >
                  Save
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default EditTeam;
