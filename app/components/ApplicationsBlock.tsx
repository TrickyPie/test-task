'use client';
import { useEffect, useState } from 'react';
import { Flex, SimpleGrid, Spinner, useToast } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import getApplications from '@/app/services/getApplications';
import { Order } from '@/app/faker';
import Pagination from '@/app/components/Pagination';
import Application from '@/app/components/Application';

import { COUNTER_STEP, LIMIT, START_PAGE } from '@/app/utils/constants';

export default function ApplicationsBlock(): JSX.Element {
  const [currentPage, setCurrentPage] = useState(START_PAGE);
  const [totalPages, setTotalPages] = useState(START_PAGE);
  const toast = useToast();

  const { data, isLoading, isError, isSuccess, error } = useQuery({
    queryKey: ['getApplications', currentPage],
    queryFn: () => getApplications(LIMIT, (currentPage - COUNTER_STEP) * LIMIT),
  });

  useEffect(() => {
    if (data && data.pagination.totalPages) {
      setTotalPages(data.pagination.totalPages);
    }
    if (isError) {
      toast({
        title: 'Ошибка с получением заявок',
        description: error.message,
        status: 'error',
      });
    }
  }, [data, error?.message, isError, toast]);

  if (isLoading) {
    return (
      <Flex justifyContent="center" p="5">
        <Spinner color="#422AFB" size={['md', 'xl']} />
      </Flex>
    );
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
      spacing={['1', '2', '3']}
      marginTop={['2', '5', '10']}
      backgroundColor="#FAFBFC"
      p={['3', '3', '5']}
      borderRadius="30px"
      boxShadow="md"
    >
      <SimpleGrid w="100%" spacing={['2', '5', '10']}>
        {isSuccess &&
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
