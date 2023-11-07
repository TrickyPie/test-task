import { Button, Flex } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import context from '../Context';

export default function SelectionControlButtons(): JSX.Element {
  const [count, setCount] = useState(0);
  const { counter } = useContext(context);

  useEffect(() => {
    setCount(counter);
  }, [counter]);

  return (
    <Flex alignSelf="end" gap="2" marginTop="8">
      <Button>Сбросить</Button>
      <Button backgroundColor="#aca5fc" color="#ffffff" _hover={{ color: '#ffffff' }}>
        Выбрано заявок: {count}
      </Button>
    </Flex>
  );
}
