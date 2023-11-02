import { Breadcrumb, BreadcrumbLink, BreadcrumbItem, Box } from '@chakra-ui/react';
import NextLink from 'next/link';
import ChevronRight from '../../public/chevron-right';

export default function Breadcrumbs(): JSX.Element {
  return (
    <Breadcrumb
      separator={
        <Box display="flex" alignItems="center" justifyContent="center">
          <ChevronRight />
        </Box>
      }
    >
      <BreadcrumbItem>
        <BreadcrumbLink as={NextLink} href={'/'} _hover={{ color: 'blue.500' }} p="2">
          Главная
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink as={NextLink} href={'/advertisers'} _hover={{ color: 'blue.500' }} p="2">
          Рекламодатели
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink
          as={NextLink}
          href={'/advertisers/orders'}
          _hover={{ color: 'blue.500' }}
          p="2"
        >
          Заказы
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink
          as={NextLink}
          href={'/advertisers/orders/order'}
          _hover={{ color: 'blue.500' }}
          p="2"
        >
          Заказ
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink
          as={NextLink}
          href={'/advertisers/orders/order/application'}
          _hover={{ color: 'blue.500' }}
          p="2"
        >
          Заявки
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}
