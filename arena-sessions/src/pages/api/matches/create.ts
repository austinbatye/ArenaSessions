import { NextApiRequest, NextApiResponse } from 'next';

import { prisma } from '@/prisma';
import { Match } from '@/models';

/**
 * Request model for creating a match
 */
export interface CreateMatchRequest {
  charId: string;
  isWin: boolean;
  arena: string;
  team: string;
  enemy: string;
}

/**
 * POST /api/matches/create
 * Function handler for creating a new match in the db
 *
 * @param req request body of the prisma query
 * @param res response body of the prism query
 */
export default async function (
  req: NextApiRequest,
  res: NextApiResponse<Match>
) {
  try {
    const result = await prisma.matches.create({
      data: req.body.match,
    });
    res.json(result);
  } catch (err) {
    res.status(400);
  }
}
