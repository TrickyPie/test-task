import { Order } from '@/app/faker';

async function putUpdatedApplication(id: number): Promise<Order> {
  const response = await fetch(`/api/orders/${id}/accept`, { method: 'PUT' });
  const data = await response.json();
  if (response.status !== 200) {
    throw new Error(data.message);
  }
  return data;
}
export default putUpdatedApplication;
