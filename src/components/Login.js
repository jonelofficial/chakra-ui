import {
  Box,
  Button,
  Center,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../schema/Schema";
import { decodeToken } from "react-jwt";

const Login = ({ setToken, token }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => {
    localStorage.setItem(
      "token",
      JSON.stringify(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FjdGl2ZSI6dHJ1ZSwicHJpdmlsZWRnZSI6WyJDUkVBVEUgVElDS0VUIiwiUkVRVUVTVEVSIiwiREVQQVJUTUVOVCIsIk1FTUJFUlMiLCJURUFNUyIsIkNBVEVHT1JZIiwiQ0hBTk5FTFMiXSwiX2lkIjoiNjI0ZDM0OTBkZTljNmMyMDY0ZGNmODYzIiwiZmlyc3ROYW1lIjoiSm9uZWwiLCJsYXN0TmFtZSI6Ik1hbmFsbyIsImRlcGFydG1lbnRJZCI6IjYyNGQzMjgwZGU5YzZjMjA2NGRjZjgyZSIsInVuaXRJZCI6IjYyNGQzNDc1ZGU5YzZjMjA2NGRjZjg1YyIsImVtYWlsIjoianVkZUBnbWFpbC5jb20iLCJjcmVhdGVkQXQiOiIyMDIyLTA0LTA2VDA2OjM0OjU2LjUyNFoiLCJ1cGRhdGVkQXQiOiIyMDIyLTA0LTA2VDA2OjM0OjU2LjUyNFoiLCJfX3YiOjAsInNlc3Npb24iOiI2MjY4ZjY5ZjE2ZmI0MTQ4NDgwMmI3ODUiLCJpYXQiOjE2NTEwNDYwNDcsImV4cCI6MTY1MTA3NDg0N30.hshIdjhW93ucMoZdNV6xnEKOY_X4m05inANsbno9Zsk"
      )
    );
    const userTokens = JSON.parse(localStorage.getItem("token"));
    const myDecodedToken = decodeToken(JSON.stringify(userTokens));
    setToken(userTokens);
    console.log(myDecodedToken);
  };
  return (
    <Box h="100vh" bg="primary">
      <Center m="0 auto" maxW="sm" h="100%">
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
          <FormControl bg="secondary" p="10" borderRadius="xl">
            <FormLabel
              htmlFor="email"
              color="text"
              fontSize="lg"
              fontWeight="semibold"
            >
              Email address
            </FormLabel>
            <Input {...register("email")} id="email" type="email" bg="text" />
            <FormHelperText
              display={errors.email ? "block" : "none"}
              color="red"
            >
              {errors.email && errors.email.message}
            </FormHelperText>
            <FormLabel
              htmlFor="password"
              mt="3"
              color="text"
              fontSize="lg"
              fontWeight="semibold"
            >
              Password
            </FormLabel>
            <Input
              {...register("password")}
              id="password"
              type="password"
              bg="text"
            />
            <FormHelperText
              display={errors.password ? "block" : "none"}
              color="red"
            >
              {errors.password && errors.password.message}
            </FormHelperText>

            <Box mt="3" textAlign="right">
              <Button colorScheme="blue" type="submit">
                Login
              </Button>
            </Box>
          </FormControl>
        </form>
      </Center>
    </Box>
  );
};

export default Login;
