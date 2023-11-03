import { faker } from '@faker-js/faker/locale/ru';

type Order = {
  id: string;
  subscribers: number;
  views: number;
  malePercentage: number;
  femalePercentage: number;
  channelAvatar: string;
  category: string;
  channelName: string;
  verificationStatus: string;
  tags: string[];
  price: string;
};

const generateFakeOrder = (): Order => {
  return {
    id: faker.string.uuid(),
    subscribers: faker.number.int({ min: 1000, max: 50000 }),
    views: faker.number.int({ min: 1000, max: 150000 }),
    malePercentage: faker.number.int({ max: 100 }),
    femalePercentage: faker.number.int({ max: 100 }),
    channelAvatar: faker.image.avatar(),
    category: faker.commerce.department(),
    channelName: faker.company.name(),
    verificationStatus: faker.helpers.arrayElement(['На проверке', 'Проверен']),
    tags: faker.lorem.words({ min: 2, max: 7 }).split(' '),
    price: faker.commerce.price(),
  };
};

const createArrayOfOrders = () => {
  const orderList = [];
  for (let i = 0; i < 35; i += 1) {
    orderList.push(generateFakeOrder());
  }
  return orderList;
};

export default createArrayOfOrders;
