import { neon } from '@neondatabase/serverless';

export async function DELETE(
	request: Request,
  	{ params }: { params: Promise<{ itemId: int }> }
) {
	const { itemId } = await params

	const sql = neon(`${process.env.DATABASE_URL}`);

	const data = await sql(`SELECT * FROM "first-street-scavengers"."Item" WHERE "id"=${itemId};`);

	try {
		await sql(`DELETE FROM "first-street-scavengers"."Item" WHERE "id"=${itemId};`);
	} catch (e) {
		return Response.json(e);
	}

	console.log(Response.json({data}))

	return Response.json({ data })
}