import { Order } from '../faker';

export type PaginationType = {
  totalCount?: number;
  totalPages?: number;
  currentPage?: number;
  nextPage?: number | null;
  prevPage?: number | null;
};

export type ResponseProps = {
  limitedOrders: Order[];
  pagination: {
    totalCount: number;
    totalPages: number;
    currentPage: number;
    nextPage: number | null;
    prevPage: number | null;
  };
};

async function getApplications(limit = 10, offset = 0): Promise<ResponseProps> {
  try {
    const response = await fetch(`/api/orders?limit=${limit}&offset=${offset}`);
    if (!response.ok) {
      throw new Error('Request failed');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error fetching orders');
  }
}
export default getApplications;
