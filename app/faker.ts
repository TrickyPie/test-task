import { faker } from '@faker-js/faker/locale/ru';

type Order = {
  id: number;
  subscribers: number;
  views: number;
  malePercentage: number;
  femalePercentage: number;
  channelAvatar: string;
  category: string;
  channelName: string;
  verificationStatus: string;
  tags: string | string[];
  price: string;
};

const generateFakeOrder = (id: number): Order => {
  return {
    id: id,
    subscribers: faker.number.int({ min: 1000, max: 50000 }),
    views: faker.number.int({ min: 1000, max: 150000 }),
    malePercentage: faker.number.int({ max: 100 }),
    femalePercentage: faker.number.int({ max: 100 }),
    channelAvatar: faker.image.avatar(),
    category: faker.commerce.department(),
    channelName: faker.company.name(),
    verificationStatus: faker.helpers.arrayElement(['На проверке', 'Проверен']),
    tags: Array.from({ length: faker.number.int({ min: 1, max: 7 }) }, () =>
      faker.commerce.department()
    ),
    price: faker.commerce.price(),
  };
};

const createArrayOfOrders = () => {
  const orderList = [];
  for (let i = 0; i < 35; i += 1) {
    orderList.push(generateFakeOrder(i + 1));
  }
  return orderList;
};

export default createArrayOfOrders;
