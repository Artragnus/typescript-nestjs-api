/*
  Warnings:

  - Changed the type of `dueDate` on the `credit_cards` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "credit_cards" DROP COLUMN "dueDate",
ADD COLUMN     "dueDate" INTEGER NOT NULL;
