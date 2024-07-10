export const dynamic = 'force-dynamic' // defaults to auto
export async function POST(request: Request) {
    const data = await request.json();
    return Response.json({
       receivedData: data,
    });
}