'use client';
import { Flex, Select, Button, Box } from '@chakra-ui/react';
import ChevronDown from '../../public/chevron-down';
import { useContext } from 'react';
import contextType from '../Context';

export default function ApplicationControlPanel(): JSX.Element {
  const { buttonStatus, setButtonStatus } = useContext(contextType);

  const handleClick = () => {
    const updatedIsClicked = !buttonStatus;
    setButtonStatus(updatedIsClicked);
  };

  return (
    <Flex
      gap="4"
      bgColor="#ffffff"
      p={['1', '2', '5']}
      marginTop="5"
      borderRadius={['5px', '15px', '25px']}
      boxShadow="md"
      flexDirection={['column', 'row']}
    >
      <Select
        overflow="hidden"
        variant="outline"
        placeholder="Выберите статус"
        w={['100%', '40%', '22%']}
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

      <Button
        colorScheme="gray"
        fontSize={['0.8em', '0.8em', '1em']}
        bgColor={buttonStatus ? 'gray.300' : 'gray.200'}
        _hover={{ backgroundColor: 'gray.100' }}
        onClick={handleClick}
      >
        Выбрать к одобрению/отклонению
      </Button>
    </Flex>
  );
}
