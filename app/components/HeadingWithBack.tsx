'use client';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { Flex, Image, Box, Link, Heading } from '@chakra-ui/react';

const orderId = '#0b6f729f-abdf-4919-92f5-31875d790179';

export default function HeadingWithBack(): JSX.Element {
  const pathname = usePathname();
  const pathWithoutLastBlock = pathname.substring(0, pathname.lastIndexOf('/'));

  return (
    <Flex gap="1" alignItems="center">
      <Link as={NextLink} href={pathWithoutLastBlock} borderRadius="5px" p={['1', '1', '2']}>
        <Box
          bg="gray.200"
          p={['1', '1', '2']}
          borderRadius="5px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            boxSize={[3, 3, 6]}
            objectFit="cover"
            src="/chevron-left.svg"
            alt="Обратно к заказу"
            loading="lazy"
          />
        </Box>
      </Link>
      <Heading as="h3" size={['sm', 'md', 'lg']}>
        Заявки по заказу {orderId}
      </Heading>
    </Flex>
  );
}
