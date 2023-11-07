'use client';
import { Flex, Center } from '@chakra-ui/react';
import Breadcrumbs from '../../../../components/Breadcrumbs';
import HeadingWithBack from '../../../../components/HeadingWithBack';
import ApplicationControlPanel from '../../../../components/ApplicationControlPanel';
import SelectionControlButtons from '../../../../components/SelectionControlButtons';
import ApplicationsBlock from '../../../../components/ApplicationsBlock';
import { useState } from 'react';
import context from '../../../../Context';

export default function ApplicationPage(): JSX.Element {
  const [buttonStatus, setButtonStatus] = useState(false);
  const [counter, setCounter] = useState<number>(0);

  const contextData = {
    buttonStatus,
    setButtonStatus,
    counter,
    setCounter,
  };

  return (
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
  );
}
