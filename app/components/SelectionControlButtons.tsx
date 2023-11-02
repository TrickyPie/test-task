import { Button, Flex } from '@chakra-ui/react';

export default function SelectionControlButtons(): JSX.Element {
  return (
    <Flex alignSelf="end" gap="2" marginTop="8">
      <Button>Сбросить</Button>
      <Button backgroundColor="#aca5fc" color="#ffffff" _hover={{ color: '#ffffff' }}>
        Выбрано заявок: 0
      </Button>
    </Flex>
  );
}
