import { Flex, Select, Button, Box } from '@chakra-ui/react';
import ChevronDown from '../../public/chevron-down';

export default function ApplicationControlPanel(): JSX.Element {
  return (
    <Flex gap="4" bgColor="#ffffff" p="5" marginTop="5" borderRadius="25px">
      <Select
        overflow="hidden"
        variant="outline"
        placeholder="Выберите статус"
        w="22%"
        bgColor="#ffffff"
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
      <Button colorScheme="gray">Выбрать к одобрению/отклонению</Button>
    </Flex>
  );
}
