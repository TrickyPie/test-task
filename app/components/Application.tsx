import {
  Box,
  Flex,
  Image,
  Text,
  Grid,
  Heading,
  Stat,
  Tag,
  Spacer,
  Checkbox,
} from '@chakra-ui/react';

export default function Application(): JSX.Element {
  return (
    <Flex w="100%" alignItems="center" borderRadius="20%" backgroundColor="white">
      <Grid gap={8}>
        <Flex gap={5}>
          <Flex gap={2} alignItems="center">
            <Image boxSize={5} objectFit="cover" src="/people.svg" alt="Количество подписчиков" />
            <Text>~1</Text>
          </Flex>
          <Flex gap={2} alignItems="center">
            <Image boxSize={5} objectFit="cover" src="/view.svg" alt="Количество просмоторов" />
            <Text>~1</Text>
          </Flex>
          <Flex gap={2} alignItems="center">
            <Image boxSize={5} objectFit="cover" src="/man.svg" alt="Мужчин среди аудитории" />
            <Text>50%</Text>
          </Flex>
          <Flex gap={2} alignItems="center">
            <Image boxSize={5} objectFit="cover" src="/woman.svg" alt="Женщин среди аудитории" />
            <Text>50%</Text>
          </Flex>
        </Flex>

        <Flex flexDirection="column" gap={2}>
          <Flex gap={4} alignItems="center">
            <Image
              boxSize={10}
              objectFit="cover"
              src="/nestjs.svg"
              alt="Аватар группы или канала в виде красного льва, являющийся логотипом nest js"
            />
            <Text>Сеть каналов СНГ</Text>
          </Flex>
          <Flex gap={4}>
            <Heading as="h4" size="md">
              Все о путешествиях
            </Heading>
            <Flex>
              <Image
                boxSize={5}
                objectFit="cover"
                src="/search.svg"
                alt="Иконка статуса проверки"
              />
              <Text>На проверке</Text>
            </Flex>
          </Flex>
        </Flex>

        <Flex gap={2}>
          <Tag>РФ</Tag>
          <Tag>Пост</Tag>
          <Tag>Видео</Tag>
          <Tag>Бизнес и Стартапы</Tag>
          <Tag>Криптовалюты</Tag>
        </Flex>
      </Grid>

      <Spacer />

      <Box>
        <Checkbox value="checked" colorScheme="blue"></Checkbox>
        <Stat as="b">220,00 USDT</Stat>
      </Box>
    </Flex>
  );
}
