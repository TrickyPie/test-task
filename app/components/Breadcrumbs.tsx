import { Breadcrumb, BreadcrumbLink, BreadcrumbItem } from '@chakra-ui/react';
import NextLink from 'next/link';

export default function Breadcrumbs(): JSX.Element {
  return (
    <Breadcrumb separator=">">
      <BreadcrumbItem>
        <BreadcrumbLink as={NextLink} href={'/'} _hover={{ color: 'blue.500' }}>
          Главная
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink as={NextLink} href={'/advertisers'} _hover={{ color: 'blue.500' }}>
          Рекламодатели
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink as={NextLink} href={'/advertisers/orders'} _hover={{ color: 'blue.500' }}>
          Заказы
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink
          as={NextLink}
          href={'/advertisers/orders/order'}
          _hover={{ color: 'blue.500' }}
        >
          Заказ
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink
          as={NextLink}
          href={'/advertisers/orders/order/application'}
          _hover={{ color: 'blue.500' }}
        >
          Заявки
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}
