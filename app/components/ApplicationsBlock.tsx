import { SimpleGrid } from '@chakra-ui/react';
import Applications from './Applications';
import Pagination from './Pagination';

export default function ApplicationsBlock(): JSX.Element {
  return (
    <SimpleGrid
      w="100%"
      spacing="3"
      marginTop="10"
      backgroundColor="#FAFBFC"
      p="5"
      borderRadius="30px"
      boxShadow="md"
    >
      <Applications></Applications>
      <Pagination></Pagination>
    </SimpleGrid>
  );
}
