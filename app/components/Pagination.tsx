import { Flex, Text, Image, Spacer } from '@chakra-ui/react';

export default function Pagination(): JSX.Element {
  return (
    <Flex>
      <Text>Страница 1 из 1</Text>
      <Spacer></Spacer>
      <Flex>
        <Image boxSize="5" objectFit="cover" src="/chevron-left.svg" alt="На предыдущую страницу" />
        <Text>1</Text>
        <Image boxSize="5" objectFit="cover" src="/chevron-right.svg" alt="На следующую страницу" />
      </Flex>
    </Flex>
  );
}
