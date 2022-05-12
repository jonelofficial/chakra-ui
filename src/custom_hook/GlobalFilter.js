import {
  CloseButton,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

const GlobalFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState("");
  const handleClearButton = () => {
    setValue("");
    setFilter(null);
  };

  return (
    <Flex>
      <InputGroup mb="3" justifyContent="end" alignItems="center">
        <Text fontSize="sm" mr="3" w="80px">
          Search :
        </Text>
        <Input
          type="text"
          value={value}
          onChange={(e) => {
            setFilter(e.target.value);
            setValue(e.target.value);
          }}
        />
        <InputRightElement>
          <CloseButton
            onClick={handleClearButton}
            display={value === "" ? "none" : "block"}
          />
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
};

export default GlobalFilter;
