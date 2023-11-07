'use client';
import { Flex, Select, Button, Box } from '@chakra-ui/react';
import ChevronDown from '../../public/chevron-down';
import { useContext } from 'react';
import buttonStatusContextType from '../Context';

export default function ApplicationControlPanel(): JSX.Element {
  const { buttonStatus, setButtonStatus } = useContext(buttonStatusContextType);

  const handleClick = () => {
    const updatedIsClicked = !buttonStatus;
    setButtonStatus(updatedIsClicked);
  };

  return (
    <Flex gap="4" bgColor="#ffffff" p="5" marginTop="5" borderRadius="25px" boxShadow="md">
      <Select
        overflow="hidden"
        variant="outline"
        placeholder="Выберите статус"
        w="22%"
        bgColor="#ffffff"
        cursor="pointer"
        icon={
          <Box
            bg="gray.200"
            p="19px"
            borderRadius="1px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <ChevronDown />
          </Box>
        }
        iconSize="6"
        _focus={{
          borderColor: '#422afb',
        }}
      >
        <option value="option1">Одобрено</option>
        <option value="option2">Отклонено</option>
        <option value="option3">Ожидает решения</option>
      </Select>

      <Button colorScheme={buttonStatus ? 'messenger' : 'gray'} onClick={handleClick}>
        Выбрать к одобрению/отклонению
      </Button>
    </Flex>
  );
}
