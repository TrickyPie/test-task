'use client';
import { Flex, Image, Box, Link, Heading } from '@chakra-ui/react';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

const orderId = '#0b6f729f-abdf-4919-92f5-31875d790179';

export default function HeadingWithBack(): JSX.Element {
  const pathname = usePathname();
  const pathWithoutLastBlock = pathname.substring(0, pathname.lastIndexOf('/'));

  return (
    <Flex gap="1" alignItems="center">
      <Link as={NextLink} href={pathWithoutLastBlock} borderRadius="5px" p="2">
        <Box
          bg="gray.200"
          p="2"
          borderRadius="5px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            boxSize="6"
            objectFit="cover"
            src="/chevron-left.svg"
            alt="Обратно к заказу"
            loading="lazy"
          />
        </Box>
      </Link>
      <Heading as="h3" size="lg">
        Заявки по заказу {orderId}
      </Heading>
    </Flex>
  );
}
