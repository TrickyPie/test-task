import { Breadcrumb, BreadcrumbLink, BreadcrumbItem } from '@chakra-ui/react';
import NextLink from 'next/link';

export default function Breadcrumbs(): JSX.Element {
  return (
    <Breadcrumb separator=">">
      {/* <Icon color="gray.300" name="chevron-right" /> */}
      <BreadcrumbItem>
        <BreadcrumbLink as={NextLink} href={'/'}>
          Главная
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink as={NextLink} href={'/advertisers'}>
          Рекламодатели
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink as={NextLink} href={'/advertisers/orders'}>
          Заказы
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink as={NextLink} href={'/advertisers/orders/order'}>
          Заказ
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink as={NextLink} href={'/advertisers/orders/order/application'}>
          Заявки
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}
