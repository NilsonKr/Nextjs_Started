import DB from '@database';
import { NextApiRequest, NextApiResponse } from 'next';

const db = new DB();

async function handler(req: NextApiRequest, res: NextApiResponse) {
	const allItems = await db.getAll();

	res.status(200).json({ length: allItems.length, data: allItems });
}

export default handler;
