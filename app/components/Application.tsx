import {
  Flex,
  Image,
  Text,
  Grid,
  Heading,
  Tag,
  Spacer,
  Checkbox,
  Card,
  Spinner,
  useToast,
} from '@chakra-ui/react';
import Search from '../../public/search';
import { Order } from '../faker';
import putUpdatedApplication from '../services/putUpdatedApplication';
import { useMutation } from '@tanstack/react-query';
import { useContext, useEffect, useState } from 'react';
import contextType from '../Context';

type ApplicationProps = {
  application: Order;
  chosenApplications: number[];
  addToChosenApplications: (id: number) => void;
  removeFromChosenApplications: (id: number) => void;
};

export default function Application({
  application,
  chosenApplications,
  addToChosenApplications,
  removeFromChosenApplications,
}: ApplicationProps): JSX.Element {
  const {
    id,
    subscribers,
    views,
    malePercentage,
    femalePercentage,
    channelAvatar,
    category,
    channelName,
    verificationStatus,
    tags,
    price,
  } = application;
  const { buttonStatus, setCounter } = useContext(contextType);
  const [checkedStatus, setCheckedStatus] = useState(chosenApplications.includes(id));
  const toast = useToast();

  const {
    mutate: update,
    isError,
    isPending,
    error,
  } = useMutation({
    mutationFn: putUpdatedApplication,
    onSuccess: async () => {
      setCheckedStatus((prev) => !prev);
    },
  });

  useEffect(() => {
    if (isError) {
      toast({
        title: `Ошибка с заявкой номер ${id}, попробуйте повторить через некоторое время.`,
        description: error.message,
        status: 'error',
      });
    }
  }, [error?.message, isError, toast, id]);

  const handleCheckboxClick = () => {
    update(id);
    if (checkedStatus) {
      removeFromChosenApplications(id);
      setCounter((prevCounter) => prevCounter - 1);
    } else {
      addToChosenApplications(id);
      setCounter((prevCounter) => prevCounter + 1);
    }
  };

  if (isPending) {
    return (
      <Flex justifyContent="center">
        <Spinner color="#422AFB" size="xl" />
      </Flex>
    );
  }

  return (
    <Card as="article" w="100%" borderRadius="30px">
      <Flex w="100%" alignItems="center" backgroundColor="white" p="2rem 3rem" borderRadius="30px">
        <Grid gap="8">
          <Flex gap="4">
            <Flex gap="2" alignItems="center">
              <Image
                boxSize="5"
                objectFit="cover"
                src="/people.svg"
                alt="Количество подписчиков"
                loading="lazy"
              />
              <Text>~{subscribers}</Text>
            </Flex>
            <Flex gap="2" alignItems="center">
              <Image
                boxSize="5"
                objectFit="cover"
                src="/view.svg"
                alt="Количество просмоторов"
                loading="lazy"
              />
              <Text>~{views}</Text>
            </Flex>
            <Flex gap="2" alignItems="center">
              <Image
                boxSize="5"
                objectFit="cover"
                src="/man.svg"
                alt="Мужчин среди аудитории"
                loading="lazy"
              />
              <Text>{malePercentage}%</Text>
            </Flex>
            <Flex gap="2" alignItems="center">
              <Image
                boxSize="5"
                objectFit="cover"
                src="/woman.svg"
                alt="Женщин среди аудитории"
                loading="lazy"
              />
              <Text>{femalePercentage}%</Text>
            </Flex>
          </Flex>

          <Flex flexDirection="column" gap="2" justifyContent="center">
            <Flex gap="2" alignItems="center">
              <Image
                boxSize="8"
                objectFit="cover"
                src={channelAvatar}
                alt="Аватар группы или канала"
                loading="lazy"
              />
              <Text>{category}</Text>
            </Flex>
            <Flex gap="4" alignItems="center">
              <Heading as="h4" size="md">
                {channelName}
              </Heading>
              <Flex
                alignItems="center"
                gap="1"
                p="2px 15px 2px 10px"
                borderRadius="5px"
                backgroundColor={verificationStatus === 'На проверке' ? '#fefcbf' : '#d1febf'}
              >
                <Search />
                <Text>{verificationStatus}</Text>
              </Flex>
            </Flex>
          </Flex>

          <Flex gap="3">
            {tags.map((tag) => {
              return <Tag key={tag}>{tag}</Tag>;
            })}
          </Flex>
        </Grid>

        <Spacer />

        <Flex flexDirection="column" h="100%" gap="30%">
          <Checkbox
            visibility={buttonStatus ? 'visible' : 'hidden'}
            value="checked"
            colorScheme="brand"
            alignSelf="end"
            onChange={handleCheckboxClick}
            isChecked={checkedStatus}
          ></Checkbox>
          <Text as="b" alignSelf="end" textAlign="end">
            {price} USDT
          </Text>
        </Flex>
      </Flex>
    </Card>
  );
}
