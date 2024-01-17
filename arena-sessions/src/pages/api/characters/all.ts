import { NextApiRequest, NextApiResponse } from 'next';

import { Character } from '@/models';
import { prisma } from '@/prisma';

/**
 * GET /api/characters/all
 * Function handler for retrieving all characters in the db
 *
 * @param req request body of the prisma query
 * @param res response body of the prism query
 */
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<Character[]>
) {
  const characters = await prisma.characters.findMany();

  res.json(characters);
}
