import { PrismaClient } from '@prisma/client';

const prismaGlobal = global as unknown as { prisma: PrismaClient };

export const prisma =
  prismaGlobal.prisma ||
  new PrismaClient({
    log: [
      { level: 'warn', emit: 'event' },
      { level: 'info', emit: 'event' },
      { level: 'error', emit: 'event' },
    ],
  });

prisma.$connect();
prisma.$on('warn' as never, (e) => console.log(e));
prisma.$on('info' as never, (e) => console.log(e));
prisma.$on('error' as never, (e) => console.log(e));

if (process.env.NODE_ENV !== 'production') {
  prismaGlobal.prisma = prisma;
}

export default prisma;
