import { Order } from '../faker';

async function putUpdatedApplication(id: number): Promise<Order> {
  try {
    const response = await fetch(`/api/orders/${id}/accept`, { method: 'PUT' });
    const data = await response.json();
    if (response.status !== 200) {
      throw new Error(data.message);
    }
    return data;
  } catch (error) {
    throw new Error(`${error}`);
  }
}
export default putUpdatedApplication;
