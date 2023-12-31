import { Order } from '@/app/faker';

export type PaginationType = {
  totalCount?: number;
  totalPages?: number;
  currentPage?: number;
  nextPage?: number | null;
  prevPage?: number | null;
};

export type ResponseProps = {
  limitedOrders: Order[];
  pagination: PaginationType;
};

async function getApplications(limit = 10, offset = 0): Promise<ResponseProps> {
  const response = await fetch(`/api/orders?limit=${limit}&offset=${offset}`);
  const data = await response.json();
  if (response.status !== 200) {
    throw new Error(data.message);
  }
  return data;
}

export default getApplications;
