import { IncomingMessage, ServerResponse } from 'http';
import DB from '@database';

const db = new DB();

async function handler(req: IncomingMessage, res: ServerResponse) {
	const allItems = await db.getAll();

	res.statusCode = 200;
	res.setHeader('Content-type', 'application/json');
	res.end(JSON.stringify({ length: allItems.length, data: allItems }));
}

export default handler;
