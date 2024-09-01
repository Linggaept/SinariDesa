import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

export default function LayAi() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [message, setMessage] = useState<boolean>(false);

  return (
    <>
      <div className="fixed bottom-10 right-10 bg-indigo-600">
        <Button onClick={onOpen} className="bg-indigo-600">
          <span className="text-black">Open Ai</span>
        </Button>
      </div>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent className="h-5/6">
          <ModalHeader className="text-indigo-600">Sinari Desa Ai</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight="semibold" mb="1rem" className="duration-300">
              {message ? "Maaf, Ai Sedang Dalam Pengembangan" : ""}
            </Text>
          </ModalBody>

          <ModalFooter>
            <div className="flex w-full gap-2">
              <input
                type="text"
                placeholder="Your Text"
                className="w-full rounded-md p-2 border-none bg-gray-200"
              />
              <Button className="bg-blue-600 text-white" onClick={() => setMessage(true)}>Send</Button>
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
