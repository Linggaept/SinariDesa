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
import { json } from "stream/consumers";

export default function LayAi() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [message, setMessage] = useState<boolean>(false);
  const [message2, setMessage2] = useState<string>("");
  const [lockedMessage, setLockedMessage] = useState<string>("");
  const [showAiMessage, setShowAiMessage] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage(true);
    setLockedMessage(message2);
    setTimeout(() => {
      setShowAiMessage(true);
    }, 1000);
  };

  const Pengembangan = ({ message2 }: { message2: string }) => {
    return (
      <div className="flex flex-col gap-5">
        <div className="w-full items-end flex justify-end">
          <div className="p-2 bg-gray-200 rounded-md duration-300">
            <Text
              fontWeight="normal"
              mb="1rem"
              className="duration-300 text-right text-md"
            >
              {message2}
            </Text>
          </div>
        </div>
        <div className="w-full items-start flex justify-start">
          <div className="p-2 item-start bg-gray-200 rounded-md duration-300">
            <Text
              fontWeight="semibold"
              mb="1rem"
              className="duration-300 text-left"
            >
              {showAiMessage &&  "Maaf, Ai Sedang Dalam Pengembangan"}
            </Text>
          </div>
        </div>
      </div>
    );
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
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight="semibold" mb="1rem" className="duration-300">
              {message ? <Pengembangan message2={lockedMessage} /> : ""}
            </Text>
          </ModalBody>

          <ModalFooter>
            <form onSubmit={(e) => handleSubmit(e)} className="flex w-full">
              <div className="flex w-full gap-2">
                <input
                  type="text"
                  placeholder="Your Text"
                  name="text"
                  value={message2}
                  onChange={(e) => setMessage2(e.target.value)}
                  className="w-full rounded-md p-2 border-none bg-gray-200"
                  disabled={message}
                  required
                />
                <Button type="submit" className="bg-blue-600 text-white" disabled={message}>
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
