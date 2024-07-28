import getClient from "@/database/client";

export const dynamic = 'force-dynamic';

// Create a new resource
// TODO: Later when we will do the admin part
// export async function POST(request: Request) {
//   const data = await request.json();
//   return Response.json({
//     receivedData: data,
//   });
// }

// Read all resources
export async function GET(request: Request) {
  const client = await getClient();
  const results = await client.query("SELECT * FROM hotel");
  return Response.json({
    hotels: results.rows,
  });
}