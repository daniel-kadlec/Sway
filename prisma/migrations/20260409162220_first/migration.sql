-- CreateTable
CREATE TABLE "Lead" (
    "id" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "primaryContact" TEXT NOT NULL,
    "primaryPlatform" TEXT NOT NULL,
    "website" TEXT,
    "contactDate" DATE,
    "secondaryContact" TEXT,
    "secondaryPlatform" TEXT,
    "note" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Lead_pkey" PRIMARY KEY ("id")
);
