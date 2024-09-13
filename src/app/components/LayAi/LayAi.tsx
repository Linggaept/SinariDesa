"use client";

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
import Image from "next/image";
import { FormEvent, useState } from "react";

export default function LayAi() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [message, setMessage] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage(true);
  };

  return (
    <>
      <div className="fixed bottom-10 right-10 z-50">
        <Image
          onClick={onOpen}
          src={"/img/logoAi.png"}
          width={1000}
          height={1000}
          alt="logo"
          className="w-14 h-auto animate-bounce shadow-lg shadow-indigo-600 cursor-pointer rounded-2xl"
        />
      </div>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent className="h-5/6">
          <ModalHeader className="text-indigo-600">Sinari Desa Ai</ModalHeader>
          <ModalCloseButton onClick={() => setMessage(false)} />
          <ModalBody>
            <Text fontWeight="semibold" mb="1rem" className="duration-300">
              {message ? "Maaf, Ai Sedang Dalam Pengembangan" : ""}
            </Text>
          </ModalBody>

          <ModalFooter>
            <form onSubmit={(e) => handleSubmit(e)} className="flex w-full">
              <div className="flex w-full gap-2">
                <input
                  type="text"
                  placeholder="Your Text"
                  className="w-full rounded-md p-2 border-none bg-gray-200"
                  required
                />
                <Button type="submit" className="bg-blue-600 text-white">
                  Send
                </Button>
              </div>
            </form>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
