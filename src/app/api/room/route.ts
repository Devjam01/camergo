import getClient from "@/database/client";

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {

  // const client = await getClient();
  // const results = await client.query(
  //   `SELECT * FROM room WHERE room.hotel_id = ${request.query.hotel_id}`
  // );
  // return Response.json({
  //   rooms: results.rows,
  // });
}