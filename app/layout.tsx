import type { Metadata } from 'next';
import { Providers } from './providers';
import { Box } from '@chakra-ui/react';

export const metadata: Metadata = {
  title: 'Test task',
  description: 'Test task for Bolt System',
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <Box lang="ru" as="html" minH="100%">
      <Box as="body" w="100%" minH="100vh" bgColor="#f4f7fe">
        <Box as="main">
          <Providers>{children}</Providers>
        </Box>
      </Box>
    </Box>
  );
}
