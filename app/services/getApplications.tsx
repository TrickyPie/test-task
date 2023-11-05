import { Order } from '../faker';

async function getApplications(limit = 10, offset = 0): Promise<Order[]> {
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
