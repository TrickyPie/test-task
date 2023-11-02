import { Flex, Center, Button } from '@chakra-ui/react';
import Breadcrumbs from '../../../../components/Breadcrumbs';
import ApplicationsBlock from '../../../../components/ApplicationsBlock';
import HeadingWithBack from '../../../../components/HeadingWithBack';
import ApplicationControlPanel from '../../../../components/ApplicationControlPanel';

export default function Application(): JSX.Element {
  return (
    <Center p="10" w="100%">
      <Flex flexDirection="column" gap="1" height="100%" w="70%">
        <Breadcrumbs />
        <HeadingWithBack />
        <ApplicationControlPanel />
        <ApplicationsBlock />

        <Flex alignSelf="end" gap="5">
          <Button>Сбросить</Button>
          <Button>Выбрано заявок: 0</Button>
        </Flex>
      </Flex>
    </Center>
  );
}
