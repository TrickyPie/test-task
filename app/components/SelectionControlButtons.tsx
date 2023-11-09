import { Button, Flex } from '@chakra-ui/react';
import { useContext } from 'react';
import context from '../Context';

export default function SelectionControlButtons(): JSX.Element {
  const { counter } = useContext(context);

  return (
    <Flex alignSelf="end" gap="2" marginTop="8">
      <Button>Сбросить</Button>
      <Button
        backgroundColor={counter === 0 ? '#aca5fc' : '#422AFB'}
        color="#ffffff"
        _hover={{ color: '#ffffff' }}
      >
        Выбрано заявок: {counter}
      </Button>
    </Flex>
  );
}
