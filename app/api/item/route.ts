import { neon } from '@neondatabase/serverless';
 
export async function GET() {
    const sql = neon(`${process.env.DATABASE_URL}`);
    const data = await sql('SELECT * FROM "first-street-scavengers"."Item";');
 
    return Response.json(data)
}

export async function POST(request: Request) {
    const sql = neon(`${process.env.DATABASE_URL}`);
    const req = await request.json()
    const {title, description, imagePath} = req

    try {
        await sql(`INSERT INTO "first-street-scavengers"."Item" ("title", "description", "imagePath") VALUES ('${title}', '${description}', '${imagePath}')`)
    } catch (e) {
        return Response.json(e)
    }

    return Response.json(req)
}