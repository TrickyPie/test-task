import { Box, Flex, Image, Text, Grid, Heading, Stat, Tag } from '@chakra-ui/react';

export default function Application(): JSX.Element {
  return (
    <Flex>
      <Grid>
        <Flex>
          <Box>
            <Image boxSize="10px" objectFit="cover" src="/chevron-right.svg" alt="" />
            <Text>~1</Text>
          </Box>
          <Box>
            <Image boxSize="10px" objectFit="cover" src="/chevron-right.svg" alt="" />
            <Text>~1</Text>
          </Box>
          <Box>
            <Image boxSize="10px" objectFit="cover" src="/chevron-right.svg" alt="" />
            <Text>50%</Text>
          </Box>
          <Box>
            <Image boxSize="10px" objectFit="cover" src="/chevron-right.svg" alt="" />
            <Text>50%</Text>
          </Box>
        </Flex>

        <Flex>
          <Flex>
            <Image boxSize="10px" objectFit="cover" src="/chevron-right.svg" alt="" />
            <Text>Сеть каналов СНГ</Text>
          </Flex>
          <Flex>
            <Heading>Все о путешествиях</Heading>
            <Box>
              <Image boxSize="10px" objectFit="cover" src="/chevron-right.svg" alt="" />
              <Text>На проверке</Text>
            </Box>
          </Flex>
        </Flex>

        <Flex>
          <Tag>РФ</Tag>
          <Tag>Пост</Tag>
          <Tag>Видео</Tag>
          <Tag>Бизнес и Стартапы</Tag>
          <Tag>Криптовалюты</Tag>
        </Flex>
      </Grid>
      <Box>
        <Stat>220,00 USDT</Stat>
      </Box>
    </Flex>
  );
}
