import { NextRequest, NextResponse } from 'next/server';
import { ordersList } from '@/app/faker';

export async function PUT(request: NextRequest, { params }: { params: { id: number } }) {
  const currentId = params.id;
  const order = ordersList.find((el) => el.id === +currentId);

  if (order) {
    order.accepted = true;
    return NextResponse.json(order, { status: 200 });
  } else {
    return NextResponse.json(
      { message: `Sorry, oder with id ${params.id} not found` },
      { status: 404 }
    );
  }
}
