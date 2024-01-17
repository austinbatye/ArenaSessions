-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "Characters";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "Matches";

-- CreateTable
CREATE TABLE "characters" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "spec" TEXT NOT NULL,
);

-- CreateTable
CREATE TABLE "matches" (
    "id" TEXT NOT NULL,
    "charId" TEXT NOT NULL,
    "isWin" BOOLEAN,
    "arena" TEXT NOT NULL,
    "team" TEXT NOT NULL,
    "enemy" TEXT NOT NULL,
);

