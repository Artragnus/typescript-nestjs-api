-- CreateTable
CREATE TABLE "credit_cards" (
    "id" SERIAL NOT NULL,
    "limit" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "closingDay" INTEGER NOT NULL,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "accountId" INTEGER,

    CONSTRAINT "credit_cards_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "credit_cards_id_key" ON "credit_cards"("id");

-- AddForeignKey
ALTER TABLE "credit_cards" ADD CONSTRAINT "credit_cards_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "accounts"("id") ON DELETE SET NULL ON UPDATE CASCADE;
