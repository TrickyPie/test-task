import { NextRequest, NextResponse } from 'next/server';
import createArrayOfOrders from '../../faker';

const ordersList = createArrayOfOrders();
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const limit = Number(searchParams.get('limit'));
  const offset = Number(searchParams.get('offset'));

  const limitedOrders = ordersList.slice(offset, offset + limit);
  const totalCount = ordersList.length;
  const totalPages = Math.ceil(totalCount / limit);
  const currentPage = Math.floor(offset / limit) + 1;
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;
  const prevPage = currentPage > 1 ? currentPage - 1 : null;

  const pagination = {
    totalCount,
    totalPages,
    currentPage,
    nextPage,
    prevPage,
  };

  const response = {
    limitedOrders,
    pagination,
  };
  return NextResponse.json(response);
}
