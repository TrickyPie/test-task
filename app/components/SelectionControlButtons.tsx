import { useContext } from 'react';
import { Button, Flex, useToast } from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';
import context from '@/app/Context';
import putUpdatedApplication from '@/app/services/putUpdatedApplication';

export default function SelectionControlButtons(): JSX.Element {
  const { chosenApplications } = useContext(context);
  const toast = useToast();

  const { mutateAsync, isPending } = useMutation({ mutationFn: putUpdatedApplication });

  const handleCheckboxClick = async () => {
    for (const application of chosenApplications) {
      try {
        await mutateAsync(application);
      } catch (error) {
        toast({
          status: 'error',
          title: `Ошибка с заявкой номер ${application}, попробуйте повторить через некоторое время.`,
        });
      }
    }
  };

  return (
    <Flex alignSelf="end" gap="2" marginTop="8">
      <Button>Сбросить</Button>
      <Button
        isLoading={isPending ? true : undefined}
        loadingText="Loading"
        w={['10em', '15em']}
        backgroundColor={chosenApplications.length ? '#aca5fc' : '#422AFB'}
        color="#ffffff"
        _hover={{ color: '#ffffff' }}
        onClick={handleCheckboxClick}
      >
        Выбрано заявок: {chosenApplications.length}
      </Button>
    </Flex>
  );
}
