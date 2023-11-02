import { Flex, Text, Image, Spacer, Box } from '@chakra-ui/react';

export default function Pagination(): JSX.Element {
  return (
    <Flex alignItems="center">
      <Text>Страница 1 из 1</Text>
      <Spacer></Spacer>
      <Flex alignItems="center" gap="2">
        <Image boxSize="5" objectFit="cover" src="/chevron-left.svg" alt="На предыдущую страницу" />
        <Box
          bg="gray.200"
          p="2"
          borderRadius="5px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text w="5" h="5" textAlign="center">
            1
          </Text>
        </Box>
        <Image boxSize="5" objectFit="cover" src="/chevron-right.svg" alt="На следующую страницу" />
      </Flex>
    </Flex>
  );
}
