import { neon } from '@neondatabase/serverless';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ reserveeId: int }> }
) {
    const { reserveeId } = await params

    const sql = neon(`${process.env.DATABASE_URL}`);

    // Get items reserved by user with reserveeId
    const data = await sql(`SELECT * FROM "first-street-scavengers"."Item" WHERE "reserveeId"=${reserveeId};`);

    return Response.json({ data })
}