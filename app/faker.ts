import { faker } from '@faker-js/faker/locale/ru';

export type Order = {
  id: number;
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
  accepted: boolean;
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
    tags: [
      ...new Set(
        Array.from({ length: faker.number.int({ min: 1, max: 4 }) }, () =>
          faker.commerce.department().toLowerCase()
        )
      ),
    ],
    price: faker.commerce.price(),
    accepted: false,
  };
};

const createArrayOfOrders = () => {
  const orderList = [];
  for (let i = 0; i < 35; i += 1) {
    orderList.push(generateFakeOrder(i + 1));
  }
  return orderList;
};

const ordersList = createArrayOfOrders();

export { ordersList };
