import type { Metadata } from 'next';
import { Providers } from './providers';
import { Box } from '@chakra-ui/react';

export const metadata: Metadata = {
  title: 'Test task',
  description: 'Test task for Bolt System',
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="ru">
      <body>
        <Box as="main">
          <Providers>{children}</Providers>
        </Box>
      </body>
    </html>
  );
}
