import { Box, Flex, Link, Heading, Select, Button, Image } from '@chakra-ui/react';
import Breadcrumbs from '../../../../components/Breadcrumbs';
import NextLink from 'next/link';
import ApplicationsBlock from '../../../../components/ApplicationsBlock';

export default function Application(): JSX.Element {
  return (
    <Flex p="10" alignItems="center" justifyContent="center">
      <Flex flexDirection="column" gap="4" height="100%">
        <Box>
          <Breadcrumbs />
        </Box>
        <Box>
          <Flex gap="4" alignItems="center">
            <Link
              as={NextLink}
              href="/advertisers/orders/order/"
              bgColor="#ffffff"
              borderRadius="5px"
              p="1"
            >
              <Image boxSize="6" objectFit="cover" src="/chevron-left.svg" alt="Обратно к заказу" />
            </Link>
            <Heading as="h3" size="lg">
              Заявки по заказу #0b6f729f-abdf-4919-92f5-31875d790179
            </Heading>
          </Flex>
        </Box>
        <Box>
          <Flex gap="4">
            <Select variant="outline" placeholder="Выберите статус" w="max-content">
              <option value="option1">Одобрено</option>
              <option value="option2">Отклонено</option>
              <option value="option3">Ожидает решения</option>
            </Select>
            <Button colorScheme="gray">Выбрать к одобрению/отклонению</Button>
          </Flex>
        </Box>
        <Box>
          <ApplicationsBlock></ApplicationsBlock>
        </Box>
        <Flex alignSelf="end" gap="5">
          <Button>Сбросить</Button>
          <Button>Выбрано заявок: 1</Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
