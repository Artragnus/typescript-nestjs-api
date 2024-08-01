import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  {
    const categories = [
      { name: 'Checking Account' },
      { name: 'Money' },
      { name: 'Savings' },
      { name: 'Investment' },
      { name: 'Others' },
    ];

    for (const category of categories) {
      const isCategoryExist = await prisma.accountCategory.findFirst({
        where: category,
      });

      if (!isCategoryExist) {
        await prisma.accountCategory.create({
          data: category,
        });
      }
    }
  }

  {
    const categories = [
      { name: 'Casa' },
      { name: 'Educação' },
      { name: 'Eletrônicos' },
      { name: 'Lazer' },
      { name: 'Outros' },
      { name: 'Restaurante' },
      { name: 'Saúde' },
      { name: 'Serviços' },
      { name: 'Supermercado' },
      { name: 'Transporte' },
      { name: 'Vestuário' },
      { name: 'Viagem' },
    ];

    for (const category of categories) {
      const isCategoryExist = await prisma.expenseCategory.findFirst({
        where: category,
      });

      if (!isCategoryExist) {
        await prisma.expenseCategory.create({
          data: category,
        });
      }
    }
  }

  {
    const categories = [
      { name: 'Investimento' },
      { name: 'Outros' },
      { name: 'Prêmio' },
      { name: 'Presente' },
      { name: 'Sálario' },
    ];

    for (const category of categories) {
      const isCategoryExist = await prisma.incomeCategory.findFirst({
        where: category,
      });

      if (!isCategoryExist) {
        await prisma.incomeCategory.create({
          data: category,
        });
      }
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
