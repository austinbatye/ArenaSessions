-- CreateTable
CREATE TABLE "characters" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50),
    "class" VARCHAR(50),
    "spec" VARCHAR(50),

    CONSTRAINT "characters_pkey" PRIMARY KEY ("id")
);

