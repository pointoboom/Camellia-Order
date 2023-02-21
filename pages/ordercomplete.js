import {
  Text,
  Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Button,
  Flex,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { AiOutlineCheckCircle } from "react-icons/ai";
function OrderComplete() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Modal
        isOpen={true}
        isCentered
        onClose={onClose}
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent pt="50px">
          <ModalBody display="flex" direction="row" justifyContent="center">
            <Flex justifyContent="center" alignItems="center">
              <Flex
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Flex justifyContent="center" alignItems="center">
                  <Icon
                    w={12}
                    h={12}
                    as={AiOutlineCheckCircle}
                    color="green"
                    mr="40px"
                  />
                  <Text fontFamily={"Inter"} textColor="rgba(47, 62, 53, 1)">
                    Thank You
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </ModalBody>

          <ModalFooter>
            {/* <>
              <Button
                backgroundColor="orange.600"
                mr={3}
                onClick={() => {
                  onClose();
                }}
                textColor="white"
                _hover={{ background: "#E76B39" }}
                fontFamily={"Inter"}
              >
                Close
              </Button>
            </> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default OrderComplete;
