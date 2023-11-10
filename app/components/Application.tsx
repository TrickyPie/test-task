import { useContext, useEffect, useState } from 'react';
import { Flex, Image, Text, Grid, Heading, Tag, Checkbox, Card } from '@chakra-ui/react';
import Search from '@/public/search';
import { Order } from '@/app/faker';
import contextType from '@/app/Context';

export default function Application({
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
}: Order): JSX.Element {
  const { buttonStatus, chosenApplications, setChosenApplications } = useContext(contextType);
  const [checkedStatus, setCheckedStatus] = useState(chosenApplications.includes(id));

  const handleCheckboxClick = () => {
    setCheckedStatus((prev) => !prev);
  };

  useEffect(() => {
    setChosenApplications((prevChosenApplications) => {
      if (checkedStatus) {
        return [...new Set([...prevChosenApplications, id])];
      } else {
        return prevChosenApplications.filter((chosenId) => chosenId !== id);
      }
    });
  }, [checkedStatus, id, setChosenApplications]);

  return (
    <Card as="article" w="100%" borderRadius="30px">
      <Flex
        w="100%"
        alignItems="center"
        justifyContent="space-between"
        backgroundColor="white"
        p={['0.5rem 1rem', '2rem 3rem']}
        borderRadius="30px"
        sx={{
          flexDirection: { base: 'column', sm: 'row' },
          alignItems: 'start',
        }}
      >
        <Grid gap={['2', '4', '8']}>
          <Flex gap={['1', '2', '4']}>
            <Flex gap="2" alignItems="center">
              <Image
                boxSize={['3', '4', '8']}
                objectFit="cover"
                src="/people.svg"
                alt="Количество подписчиков"
                loading="lazy"
              />
              <Text fontSize={['0.8em', '1em', '1.2em']}>~{subscribers}</Text>
            </Flex>
            <Flex gap="2" alignItems="center">
              <Image
                boxSize={['3', '4', '8']}
                objectFit="cover"
                src="/view.svg"
                alt="Количество просмоторов"
                loading="lazy"
              />
              <Text fontSize={['0.8em', '1em', '1.2em']}>~{views}</Text>
            </Flex>
            <Flex gap="2" alignItems="center">
              <Image
                boxSize={['3', '4', '8']}
                objectFit="cover"
                src="/man.svg"
                alt="Мужчин среди аудитории"
                loading="lazy"
              />
              <Text fontSize={['0.8em', '1em', '1.2em']}>{malePercentage}%</Text>
            </Flex>
            <Flex gap="2" alignItems="center">
              <Image
                boxSize={['3', '4', '8']}
                objectFit="cover"
                src="/woman.svg"
                alt="Женщин среди аудитории"
                loading="lazy"
              />
              <Text fontSize={['0.8em', '1em', '1.2em']}>{femalePercentage}%</Text>
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
              <Text fontSize={['1em', '1em', '1.2em']}>{category}</Text>
            </Flex>
            <Flex
              gap="4"
              alignItems="center"
              sx={{
                flexDirection: { base: 'column', sm: 'row' },
                alignItems: 'start',
              }}
            >
              <Heading as="h4" size="md" fontSize={['1em', '1.2em', '1.5em']}>
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

          <Flex
            gap="3"
            sx={{
              flexDirection: { base: 'column', sm: 'row' },
              alignItems: 'start',
            }}
          >
            {tags.map((tag) => {
              return <Tag key={tag}>{tag}</Tag>;
            })}
          </Flex>
        </Grid>

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
