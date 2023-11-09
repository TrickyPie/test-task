'use client';
import { useMemo, useState } from 'react';
import { Flex, Center } from '@chakra-ui/react';
import context from '@/app/Context';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import HeadingWithBack from '@/app/components/HeadingWithBack';
import ApplicationControlPanel from '@/app/components/ApplicationControlPanel';
import SelectionControlButtons from '@/app/components/SelectionControlButtons';
import ApplicationsBlock from '@/app/components/ApplicationsBlock';

export const ErrorBoundary = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return <>{children}</>;
};

export default function ApplicationPage(): JSX.Element {
  const [buttonStatus, setButtonStatus] = useState<boolean>(false);
  const [counter, setCounter] = useState<number>(0);

  const contextData = useMemo(() => {
    return {
      buttonStatus,
      setButtonStatus,
      counter,
      setCounter,
    };
  }, [buttonStatus, setButtonStatus, counter, setCounter]);

  return (
    <ErrorBoundary>
      <context.Provider value={contextData}>
        <Center p={{ base: '3', md: '5', lg: '10' }} w="100%">
          <Flex
            flexDirection="column"
            gap="1"
            height="100%"
            w={{ base: '100%', md: '80%', lg: '70%' }}
          >
            <Breadcrumbs />
            <HeadingWithBack />
            <ApplicationControlPanel />
            <ApplicationsBlock />
            <SelectionControlButtons />
          </Flex>
        </Center>
      </context.Provider>
    </ErrorBoundary>
  );
}
