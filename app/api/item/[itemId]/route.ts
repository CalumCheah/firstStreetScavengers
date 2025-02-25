import { neon } from '@neondatabase/serverless';

export async function DELETE(
	request: Request,
  	{ params }: { params: Promise<{ itemId: int }> }
) {
	const { itemId } = await params

	const sql = neon(`${process.env.DATABASE_URL}`);

	// Get item with itemId so that it can be sent as response
	const data = await sql(`SELECT * FROM "first-street-scavengers"."Item" WHERE "id"=${itemId};`);

	// Delete item with itemId
	try {
		await sql(`DELETE FROM "first-street-scavengers"."Item" WHERE "id"=${itemId};`);
	} catch (e) {
		return Response.json(e);
	}

	return Response.json({ data })
}