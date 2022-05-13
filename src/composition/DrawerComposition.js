import {
  Box,
  Center,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Spinner,
} from "@chakra-ui/react";
import React from "react";

const DrawerComposition = (
  { isLoading, isError, handleClose, isOpen, onClose },
  props
) => {
  return (
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
          props.children
        )}
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerComposition;
