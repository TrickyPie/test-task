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
} from '@chakra-ui/react';
import Search from '../../public/search';
import { Order } from '../faker';
import putUpdatedApplication from '../services/putUpdatedApplication';
import { useMutation } from '@tanstack/react-query';
import { useContext, useState } from 'react';
import buttonStatusContextType from '../Context';

export const chosenApplications: number[] = [];
export default function Application(appProps: Order): JSX.Element {
  const [checkedStatus, setCheckedStatus] = useState(false);
  const { buttonStatus } = useContext(buttonStatusContextType);

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
  } = appProps;

  const {
    mutate: update,
    isSuccess,
    isError,
    isPending,
    error,
    data,
  } = useMutation({
    mutationFn: putUpdatedApplication,
    onSuccess: async () => {
      console.log('onSuccess');
      setCheckedStatus(!checkedStatus);
    },
    onSettled: async () => {
      console.log('onSettled');
    },
  });

  const handleCheckboxClick = () => {
    update(id);
  };

  if (isPending) {
    return (
      <Flex justifyContent="center">
        <Spinner color="#422AFB" size="xl" />
      </Flex>
    );
  }

  if (isError) {
    console.log(error.message);
  }

  if (isSuccess && !chosenApplications.some((id) => id === data.id)) {
    chosenApplications.push(id);
  }

  return (
    <Card as="article" w="100%" borderRadius="30px">
      <Flex w="100%" alignItems="center" backgroundColor="white" p="2rem 3rem" borderRadius="30px">
        <Grid gap="8">
          <Flex gap="4">
            <Flex gap="2" alignItems="center">
              <Image boxSize="5" objectFit="cover" src="/people.svg" alt="Количество подписчиков" />
              <Text>~{subscribers}</Text>
            </Flex>
            <Flex gap="2" alignItems="center">
              <Image boxSize="5" objectFit="cover" src="/view.svg" alt="Количество просмоторов" />
              <Text>~{views}</Text>
            </Flex>
            <Flex gap="2" alignItems="center">
              <Image boxSize="5" objectFit="cover" src="/man.svg" alt="Мужчин среди аудитории" />
              <Text>{malePercentage}%</Text>
            </Flex>
            <Flex gap="2" alignItems="center">
              <Image boxSize="5" objectFit="cover" src="/woman.svg" alt="Женщин среди аудитории" />
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
