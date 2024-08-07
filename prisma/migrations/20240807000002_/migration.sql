-- CreateTable
CREATE TABLE "credit_card_expenses" (
    "id" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT,
    "creditCardId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "credit_card_expenses_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "credit_card_expenses_id_key" ON "credit_card_expenses"("id");

-- AddForeignKey
ALTER TABLE "credit_card_expenses" ADD CONSTRAINT "credit_card_expenses_creditCardId_fkey" FOREIGN KEY ("creditCardId") REFERENCES "credit_cards"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "credit_card_expenses" ADD CONSTRAINT "credit_card_expenses_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
