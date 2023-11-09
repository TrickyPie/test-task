import { Flex, Text, Image, Box, Button } from '@chakra-ui/react';
import { PaginationType } from '../services/getApplications';

type PaginationProps = {
  handlePrev: () => void;
  handleNext: () => void;
} & PaginationType;

export default function Pagination({
  handlePrev,
  handleNext,
  totalPages,
  currentPage,
  nextPage,
  prevPage,
}: PaginationProps): JSX.Element {
  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Text>
        Страница {currentPage ? currentPage : 1} из {totalPages ? totalPages : 1}
      </Text>

      <Flex alignItems="center" gap="2">
        <Button
          bgColor="transparent"
          _hover={{ bgColor: 'transparent' }}
          isDisabled={!prevPage}
          onClick={handlePrev}
        >
          <Image
            boxSize="5"
            objectFit="cover"
            src="/chevron-left.svg"
            alt="На предыдущую страницу"
            loading="lazy"
          />
        </Button>

        <Box
          bg="gray.200"
          p="2"
          borderRadius="5px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text w="5" h="5" textAlign="center">
            {currentPage ? currentPage : 1}
          </Text>
        </Box>

        <Button
          bgColor="transparent"
          _hover={{ bgColor: 'transparent' }}
          isDisabled={!nextPage}
          onClick={handleNext}
        >
          <Image
            boxSize="5"
            objectFit="cover"
            src="/chevron-right.svg"
            alt="На следующую страницу"
            loading="lazy"
          />
        </Button>
      </Flex>
    </Flex>
  );
}
