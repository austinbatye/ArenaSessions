import { NextApiRequest, NextApiResponse } from 'next';

import { prisma } from '@/prisma';
import { Match } from '@/models';

/**
 * PUT /api/matches/all/:id
 * Function handler for retrieving all of the specified character's matches in the db
 *
 * @param req request body of the prisma query
 * @param res response body of the prism query
 */
export default async function (
  req: NextApiRequest,
  res: NextApiResponse<Match[]>
) {
  try {
    const characterId = req.query.id?.toString();
    const result = await prisma.matches.findMany({
      where: { charId: characterId },
    });
    res.json(result);
  } catch (err) {
    res.status(400);
  }
}
