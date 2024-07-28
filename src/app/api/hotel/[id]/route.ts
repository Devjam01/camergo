export const dynamic = 'force-dynamic';

// Read one resource
export async function GET(request: Request) {
  const data = await request.json();

  return Response.json({
    receivedData: data,
  });
}

// Update one resource
export async function PATCH(request: Request) {
  const data = await request.json();

  return Response.json({
    receivedData: data,
  });
}

// Delete one resource
export async function DELETE(request: Request) {
  const data = await request.json();

  return Response.json({
    receivedData: data,
  });
}
