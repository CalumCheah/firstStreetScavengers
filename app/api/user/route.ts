import { neon } from '@neondatabase/serverless';

export async function GET() {
    const sql = neon(`${process.env.DATABASE_URL}`);
    const data = await sql('SELECT "username", "contactInfo" FROM "first-street-scavengers"."User";');
 
    return Response.json({ data })
}
