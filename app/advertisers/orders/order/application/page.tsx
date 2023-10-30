import { Center, Box, Container, Flex, Text } from '@chakra-ui/react';
import Breadcrumbs from '../../../../components/Breadcrumbs';

export default function Application(): JSX.Element {
  return (
    <Center>
      <Container>
        <Flex flexDirection="column" gap={4}>
          <Box>
            <Breadcrumbs />
          </Box>
          <Box>
            <Text>Box 2</Text>
          </Box>
          <Box>
            <Text>Box 3</Text>
          </Box>
          <Box>
            <Text>Box 4</Text>
          </Box>
        </Flex>
      </Container>
    </Center>
  );
}
