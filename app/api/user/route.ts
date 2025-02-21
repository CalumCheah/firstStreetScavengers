import { neon } from '@neondatabase/serverless';

const bcrypt = require("bcrypt")
const saltRounds = 3

export async function GET() {
    const sql = neon(`${process.env.DATABASE_URL}`);
    const data = await sql('SELECT "username", "contactInfo" FROM "first-street-scavengers"."User";');
 
    return Response.json({ data })
}

export async function POST(request: Request) {
    const sql = neon(`${process.env.DATABASE_URL}`);
    const req = await request.json()
    const {username, contactInfo, password} = req

    bcrypt
        .hash(password, saltRounds)
        .then(async (hash: string) => {
            await sql(`INSERT INTO "first-street-scavengers"."User" ("username", "contactInfo", "password") VALUES ('${username}', '${contactInfo}', '${hash}')`)
        })
        .catch((err: any) => {
            return Response.json(err)
        })

    return Response.json(req)
}