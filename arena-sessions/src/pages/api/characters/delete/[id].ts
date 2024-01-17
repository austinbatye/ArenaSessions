import { NextApiRequest, NextApiResponse } from 'next';

import { prisma } from '@/prisma';
import { Character } from '@/models';

/**
 * PUT /api/characters/delete/:id
 * Function handler for creating a new character in the db
 *
 * @param req request body of the prisma query
 * @param res response body of the prism query
 */
export default async function (
  req: NextApiRequest,
  res: NextApiResponse<Character>
) {
  try {
    const characterId = req.query.id?.toString();
    const result = await prisma.characters.delete({
      where: { id: characterId },
    });
    res.json(result);
  } catch (err) {
    res.status(400);
  }
}
