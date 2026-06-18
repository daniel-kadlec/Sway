-- CreateTable
CREATE TABLE "Settings" (
    "id" TEXT NOT NULL,
    "contactDelay" INTEGER NOT NULL DEFAULT 7,
    "advanceFromBacklogDelay" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Settings_pkey" PRIMARY KEY ("id")
);
