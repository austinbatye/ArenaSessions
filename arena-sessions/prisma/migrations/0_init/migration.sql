-- CreateTable
CREATE TABLE "Characters" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "spec" TEXT NOT NULL,

    CONSTRAINT "characters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Matches" (
    "id" TEXT NOT NULL,
    "charId" TEXT NOT NULL,
    "isWin" BOOLEAN,
    "arena" TEXT NOT NULL,
    "team" TEXT NOT NULL,
    "enemy" TEXT NOT NULL,

    CONSTRAINT "matches_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Character_id_key" ON "Characters"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Matches_id_key" ON "Matches"("id");

