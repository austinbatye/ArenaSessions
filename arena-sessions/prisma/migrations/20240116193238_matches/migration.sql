-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "characters";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "matches";

-- CreateTable
CREATE TABLE "characters"."characters" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "spec" TEXT NOT NULL,

    CONSTRAINT "characters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "matches"."matches" (
    "id" TEXT NOT NULL,
    "charId" TEXT NOT NULL,
    "isWin" BOOLEAN NOT NULL,
    "arena" TEXT NOT NULL,
    "team" TEXT NOT NULL,
    "enemy" TEXT NOT NULL,

    CONSTRAINT "matches_pkey" PRIMARY KEY ("id")
);
