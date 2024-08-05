/*
  Warnings:

  - The primary key for the `credit_cards` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "credit_cards" DROP CONSTRAINT "credit_cards_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "credit_cards_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "credit_cards_id_seq";
