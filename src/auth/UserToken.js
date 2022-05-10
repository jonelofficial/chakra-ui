import React, { useState } from "react";
import { decodeToken } from "react-jwt";

const UserToken = () => {
  const getToken = () => {
    const userToken = JSON.parse(localStorage.getItem("token"));
    const myDecodedToken = decodeToken(JSON.stringify(userToken));
    return myDecodedToken;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    localStorage.setItem("token", JSON.stringify(userToken));
    const userTokens = JSON.parse(localStorage.getItem("token"));
    const myDecodedToken = decodeToken(JSON.stringify(userTokens));
    setToken(myDecodedToken, token);
  };
  return {
    setToken: saveToken,
    token,
  };
};

export default UserToken;
