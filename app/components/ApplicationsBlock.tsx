import { SimpleGrid } from '@chakra-ui/react';
import Applications from './Applications';

export default function ApplicationsBlock(): JSX.Element {
  return (
    <SimpleGrid w="100%" spacing={10}>
      <Applications></Applications>
    </SimpleGrid>
  );
}
