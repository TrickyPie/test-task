import { Flex, Image, Text, Grid, Heading, Tag, Spacer, Checkbox, Card } from '@chakra-ui/react';
import Search from '../../public/search';

export default function Application(): JSX.Element {
  return (
    <Card as="article" w="100%" borderRadius="30px">
      <Flex w="100%" alignItems="center" backgroundColor="white" p="2rem 3rem" borderRadius="30px">
        <Grid gap="8">
          <Flex gap="4">
            <Flex gap="2" alignItems="center">
              <Image boxSize="5" objectFit="cover" src="/people.svg" alt="Количество подписчиков" />
              <Text>~1</Text>
            </Flex>
            <Flex gap="2" alignItems="center">
              <Image boxSize="5" objectFit="cover" src="/view.svg" alt="Количество просмоторов" />
              <Text>~1</Text>
            </Flex>
            <Flex gap="2" alignItems="center">
              <Image boxSize="5" objectFit="cover" src="/man.svg" alt="Мужчин среди аудитории" />
              <Text>50%</Text>
            </Flex>
            <Flex gap="2" alignItems="center">
              <Image boxSize="5" objectFit="cover" src="/woman.svg" alt="Женщин среди аудитории" />
              <Text>50%</Text>
            </Flex>
          </Flex>

          <Flex flexDirection="column" gap="2" justifyContent="center">
            <Flex gap="2" alignItems="center">
              <Image
                boxSize="8"
                objectFit="cover"
                src="/nestjs.svg"
                alt="Аватар группы или канала в виде красного льва, являющийся логотипом nest js"
              />
              <Text>Сеть каналов СНГ</Text>
            </Flex>
            <Flex gap="4" alignItems="center">
              <Heading as="h4" size="md">
                Все о путешествиях
              </Heading>
              <Flex
                alignItems="center"
                gap="1"
                backgroundColor="#fefcbf"
                p="2px 15px 2px 10px"
                borderRadius="5px"
              >
                <Search />
                <Text>На проверке</Text>
              </Flex>
            </Flex>
          </Flex>

          <Flex gap="3">
            <Tag>РФ</Tag>
            <Tag>Пост</Tag>
            <Tag>Видео</Tag>
            <Tag>Бизнес и Стартапы</Tag>
            <Tag>Криптовалюты</Tag>
          </Flex>
        </Grid>

        <Spacer />

        <Flex flexDirection="column" h="100%" gap="30%">
          <Checkbox value="checked" colorScheme="brand" alignSelf="end"></Checkbox>
          <Text as="b" alignSelf="end" textAlign="end">
            220,00 USDT
          </Text>
        </Flex>
      </Flex>
    </Card>
  );
}
