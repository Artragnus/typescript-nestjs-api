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
