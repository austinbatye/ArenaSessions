import { NextApiRequest, NextApiResponse } from 'next';

import { prisma } from '@/apis';
import { Character } from '@/models';

/**
 * Request model for creating a character
 */
export interface CreateCharacterRequest {
  name: string;
  class: string;
  spec: string;
}

/**
 * POST /api/characters/create
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
    // Validate against duplicate entries
    // const character: Character = JSON.parse(req.body);
    // const duplicate = await prisma.characters.findFirst({
    //   where: {
    //     name: character.name,
    //     spec: character.spec,
    //     class: character.class,
    //   },
    // });
    // if (duplicate != null) {
    //   throw `This character already exists.`;
    // }

    const result = await prisma.characters.create({
      data: req.body,
    });
    res.json(result);
  } catch (err) {
    res.status(400);
  }
}
