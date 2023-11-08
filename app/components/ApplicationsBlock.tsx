'use client';
import { Flex, SimpleGrid, Spinner, useToast } from '@chakra-ui/react';
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
  const [chosenApplications, setChosenApplications] = useState<number[]>([]);
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
      <Flex justifyContent="center">
        <Spinner color="#422AFB" size="xl" />
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

  const addToChosenApplications = (id: number) => {
    setChosenApplications((prevChosenApplications) => [...prevChosenApplications, id]);
  };

  const removeFromChosenApplications = (id: number) => {
    setChosenApplications((prevChosenApplications) =>
      prevChosenApplications.filter((chosenId) => chosenId !== id)
    );
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
      <SimpleGrid w="100%" spacing="10">
        {isSuccess &&
          data.limitedOrders.map((application: Order) => {
            return (
              <Application
                key={application.id}
                application={application}
                chosenApplications={chosenApplications}
                addToChosenApplications={addToChosenApplications}
                removeFromChosenApplications={removeFromChosenApplications}
              ></Application>
            );
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
