import { SimpleGrid } from '@chakra-ui/react';
import Application from './Application';

export default function Applications(): JSX.Element {
  return (
    <SimpleGrid w="100%" spacing={10} padding="5">
      <Application></Application>
      <Application></Application>
      <Application></Application>
      <Application></Application>
      <Application></Application>
      <Application></Application>
      <Application></Application>
      <Application></Application>
      <Application></Application>
      <Application></Application>
    </SimpleGrid>
  );
}
