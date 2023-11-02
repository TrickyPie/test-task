import { Flex, Center, Select, Button, Box } from '@chakra-ui/react';
import Breadcrumbs from '../../../../components/Breadcrumbs';
import ApplicationsBlock from '../../../../components/ApplicationsBlock';
import ChevronDown from '../../../../../public/chevron-down';
import HeadingWithBack from '../../../../components/HeadingWithBack';

export default function Application(): JSX.Element {
  return (
    <Center p="10" w="100%">
      <Flex flexDirection="column" gap="1" height="100%" w="70%">
        <Breadcrumbs />
        <HeadingWithBack />
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
          >
            <option value="option1">Одобрено</option>
            <option value="option2">Отклонено</option>
            <option value="option3">Ожидает решения</option>
          </Select>
          <Button colorScheme="gray">Выбрать к одобрению/отклонению</Button>
        </Flex>

        <ApplicationsBlock></ApplicationsBlock>

        <Flex alignSelf="end" gap="5">
          <Button>Сбросить</Button>
          <Button>Выбрано заявок: 0</Button>
        </Flex>
      </Flex>
    </Center>
  );
}
