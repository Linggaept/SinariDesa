import {
  Box,
  Text,
  HStack,
  Button,
  Badge,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import { FaRegHeart, FaShareAlt, FaCommentDots } from "react-icons/fa";
import React, { Dispatch, SetStateAction } from "react";

interface CounterButtonProps {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}
const BoxOrder: React.FC<CounterButtonProps> = ({ count, setCount }) => {
  const handleCountPlus = () => {
    if (count <= 99) setCount(count + 1);
  };
  const handleCountMinus = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <section className="mx-auto">
      <Box p={4} borderWidth="1px" borderRadius="lg">
        <Text fontSize="lg" fontWeight="bold">
          Atur Pesanan
        </Text>

        <HStack mt={4} spacing={4} alignItems="center">
          <div className="border-2 border-gray-300 flex items-center gap-4 rounded-md">
            <Button onClick={handleCountMinus}>-</Button>
            <Text>{count}</Text>
            <Button onClick={handleCountPlus}>+</Button>
          </div>
          <Text>
            Stok Total: <Badge colorScheme="red">100</Badge>
          </Text>
        </HStack>

        <h1 className="mb-20 mt-2 text-sm font-normal text-gray-700">
          Max. pembelian 3 pcs
        </h1>
        <div className="flex justify-between">
          <h1 className="text-gray-700 font-normal">Subtotal</h1>
          <h1 className="text-black font-bold text-xl">Rp.10.000</h1>
        </div>

        <Button colorScheme="green" w="full" mt={4}>
          PESAN
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-3 mt-4 gap-2">
          <div className="flex gap-2 items-center">
            <h1 className="font-semibold ">
              <span>
                <IconButton icon={<FaCommentDots />} aria-label="Chat" />
              </span>
              Chat
            </h1>
          </div>

          <div className="flex gap-2 items-center">
            <h1 className="font-semibold">
              <span>
                <IconButton icon={<FaRegHeart />} aria-label="Wishlist" />
              </span>
              Wishlist
            </h1>
          </div>

          <div className="flex gap-2 items-center">
            <h1 className="font-semibold flex gap-2 items-center">
              <span>
                <IconButton icon={<FaShareAlt />} aria-label="Share" />
              </span>
              Share
            </h1>
          </div>

        </div>
      </Box>
    </section>
  );
};

export default BoxOrder;
