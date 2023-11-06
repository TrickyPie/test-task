'use client';
import { Flex, SimpleGrid, Spinner } from '@chakra-ui/react';
import getApplications from '../services/getApplications';
import { useQuery } from '@tanstack/react-query';
import Pagination from './Pagination';
import { Order } from '../faker';
import Application from './Application';
import { useEffect, useState } from 'react';
import { COUNTER_STEP, LIMIT, START_PAGE } from '../utils/constants';

export default function ApplicationsBlock(): JSX.Element {
  const [currentPage, setCurrentPage] = useState(START_PAGE);
  const [totalPages, setTotalPages] = useState(START_PAGE);

  const { isPending, isError, data, error } = useQuery({
    queryKey: ['getApplications', currentPage],
    queryFn: () => getApplications(LIMIT, (currentPage - COUNTER_STEP) * LIMIT),
  });

  useEffect(() => {
    if (data) {
      setTotalPages(data.pagination.totalPages);
    }
  }, [data]);

  if (isError) {
    console.log(error.message);
  }

  const handlePrevClick = () => {
    if (currentPage > START_PAGE) {
      setCurrentPage((prevPage) => prevPage - COUNTER_STEP);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + COUNTER_STEP);
    }
  };

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
      {isPending && (
        <Flex justifyContent="center">
          <Spinner color="#422AFB" size="xl" />
        </Flex>
      )}
      <SimpleGrid w="100%" spacing="10">
        {data &&
          data.limitedOrders.map((application: Order) => {
            return <Application key={application.id} {...application}></Application>;
          })}
      </SimpleGrid>

      <Pagination
        handlePrev={handlePrevClick}
        handleNext={handleNextClick}
        {...data?.pagination}
      ></Pagination>
    </SimpleGrid>
  );
}
