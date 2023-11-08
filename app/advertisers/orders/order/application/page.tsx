'use client';
import { Flex, Center } from '@chakra-ui/react';
import Breadcrumbs from '../../../../components/Breadcrumbs';
import HeadingWithBack from '../../../../components/HeadingWithBack';
import ApplicationControlPanel from '../../../../components/ApplicationControlPanel';
import SelectionControlButtons from '../../../../components/SelectionControlButtons';
import ApplicationsBlock from '../../../../components/ApplicationsBlock';
import { useMemo, useState } from 'react';
import context from '../../../../Context';

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
        <Center p="10" w="100%">
          <Flex flexDirection="column" gap="1" height="100%" w="70%">
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
