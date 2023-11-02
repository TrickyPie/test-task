import { Button, Flex } from '@chakra-ui/react';

export default function ApplicationsBlock(): JSX.Element {
  return (
    <Flex alignSelf="end" gap="5">
      <Button>Сбросить</Button>
      <Button>Выбрано заявок: 0</Button>
    </Flex>
  );
}
