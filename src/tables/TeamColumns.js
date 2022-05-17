import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import moment from "moment";
import { NavLink } from "react-router-dom";
import { removeTeam } from "../api/team/TeamAPI";
import UseRemove from "../custom_hook/react_query/UseRemove";

export const COLUMNS = [
  {
    Header: "First Name",
    accessor: "firstName",
  },
  {
    Header: "Last Name",
    accessor: "lastName",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Phone Number",
    accessor: "phoneNumber",
  },
  {
    Header: "Team Group",
    accessor: "teamGroup",
  },
  {
    Header: "Date",
    accessor: "datePicker",
    Cell: ({ value }) => {
      return moment(new Date(value)).format("MM/DD/YYYY");
    },
  },
  {
    Header: "Action",
    Cell: (props) => {
      // To open modal
      const { isOpen, onOpen, onClose } = useDisclosure();
      const initialProps = {
        API: removeTeam,
        // ID: props.row.original.id,
        onClose: onClose,
        DATA_NAME: "teams",
      };
      const { remove, isLoading } = UseRemove(initialProps);
      return (
        <>
          <NavLink to={`/team/team-list/edit-team/${props.row.original.id}`}>
            <Button colorScheme="teal" size="xs" mr="3">
              Update
            </Button>
          </NavLink>
          <Button size="xs" colorScheme="red" onClick={onOpen}>
            Delete
          </Button>

          <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader textAlign="center">Are you sure?</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                Do you really want to delete {props.row.original.firstName}{" "}
                records? This process cannot be undone.
              </ModalBody>

              <ModalFooter>
                <Button variant="ghost" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button
                  onClick={() => remove(props.row.original.id)}
                  isLoading={isLoading}
                  colorScheme="orange"
                >
                  Proceed
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      );
    },
  },
];
