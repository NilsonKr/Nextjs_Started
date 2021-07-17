import { NextApiRequest, NextApiResponse } from 'next';
import DB from '@database';

const db = new DB();

async function handler(req: NextApiRequest, res: NextApiResponse) {
	const productId = req.query.id;
	const item = await db.getById(productId as string);

	res.status(200).json(item);
}

export default handler;
