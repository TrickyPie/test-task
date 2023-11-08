'use client';
import { usePathname } from 'next/navigation';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex } from '@chakra-ui/react';
import ChevronRight from '../../public/chevron-right';

const routes = [
  { path: '/', name: 'Главная' },
  { path: '/advertisers', name: 'Рекламодатели' },
  { path: '/advertisers/orders', name: 'Заказы' },
  { path: '/advertisers/orders/order', name: 'Заказ' },
  { path: '/advertisers/orders/order/application', name: 'Заявки' },
];

export default function Breadcrumbs(): JSX.Element {
  const pathname = usePathname();
  return (
    <Breadcrumb
      sx={{
        ol: {
          display: 'flex',
          flexDirection: { base: 'column', md: 'row' },
          alignItems: 'start',
          justifyContent: 'start',
        },
      }}
      separator={
        <Flex alignItems="center" justifyContent="center">
          <ChevronRight />
        </Flex>
      }
    >
      {routes.map(({ path, name }) => {
        const isCurrent = pathname === path;

        return (
          <BreadcrumbItem key={path} isCurrentPage={isCurrent ? true : undefined}>
            <BreadcrumbLink
              href={path}
              _hover={{ color: '#422afb', textDecoration: 'none', cursor: 'pointer' }}
              p="2"
              fontWeight={isCurrent ? 'bold' : 'normal'}
            >
              {name}
            </BreadcrumbLink>
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
}
