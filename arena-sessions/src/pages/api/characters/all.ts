import { NextApiRequest, NextApiResponse } from 'next';

import { prisma } from '@/apis';
import { Character } from '@/models';

// GET /api/characters/all
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<Character[]>
) {
  const characters = await prisma.characters.findMany();

  res.json(characters);
}
