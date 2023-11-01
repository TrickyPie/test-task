import { Flex, Center, Link, Heading, Select, Button, Image, Box } from '@chakra-ui/react';
import Breadcrumbs from '../../../../components/Breadcrumbs';
import NextLink from 'next/link';
import ApplicationsBlock from '../../../../components/ApplicationsBlock';
import ChevronDown from '../../../../../public/chevron-down';

export default function Application(): JSX.Element {
  return (
    <Center p="10">
      <Flex flexDirection="column" gap="4" height="100%">
        <Breadcrumbs />

        <Flex gap="2" alignItems="center">
          <Link
            as={NextLink}
            href="/advertisers/orders/order/"
            bgColor="#ffffff"
            borderRadius="5px"
            p="2"
          >
            <Box
              bg="gray.200"
              p="2"
              borderRadius="5px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Image boxSize="6" objectFit="cover" src="/chevron-left.svg" alt="Обратно к заказу" />
            </Box>
          </Link>
          <Heading as="h3" size="lg">
            Заявки по заказу #0b6f729f-abdf-4919-92f5-31875d790179
          </Heading>
        </Flex>

        <Flex gap="4">
          <Select
            overflow="hidden"
            variant="outline"
            placeholder="Выберите статус"
            w="max-content"
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
