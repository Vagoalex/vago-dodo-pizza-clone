import { Prisma } from '@prisma/client';
import { prisma } from '@/prisma/prisma-client';
import { categories } from '@/prisma/constants/categories.constants';

export class CategoryService {
    private static getBaseCategories(): Prisma.CategoryCreateInput[] {
        return categories;
    }

    public static async createBaseCategories() {
        await prisma.category.createMany({
            data: this.getBaseCategories(),
        });
    }

    public static async clearCollectionData() {
        await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE;`;
    }
}
