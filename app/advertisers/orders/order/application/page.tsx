import { Flex, Center } from '@chakra-ui/react';
import Breadcrumbs from '../../../../components/Breadcrumbs';
import ApplicationsBlock from '../../../../components/ApplicationsBlock';
import HeadingWithBack from '../../../../components/HeadingWithBack';
import ApplicationControlPanel from '../../../../components/ApplicationControlPanel';
import SelectionControlButtons from '../../../../components/SelectionControlButtons';

export default function Application(): JSX.Element {
  return (
    <Center p="10" w="100%">
      <Flex flexDirection="column" gap="1" height="100%" w="70%">
        <Breadcrumbs />
        <HeadingWithBack />
        <ApplicationControlPanel />
        <ApplicationsBlock />
        <SelectionControlButtons />
      </Flex>
    </Center>
  );
}
