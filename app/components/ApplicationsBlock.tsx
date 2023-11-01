import { SimpleGrid } from '@chakra-ui/react';
import Applications from './Applications';
import Pagination from './Pagination';

export default function ApplicationsBlock(): JSX.Element {
  return (
    <SimpleGrid w="100%" spacing="5">
      <Applications></Applications>
      <Pagination></Pagination>
    </SimpleGrid>
  );
}
