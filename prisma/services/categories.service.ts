import { Prisma } from '@prisma/client';
import { prisma } from '@/prisma/prisma-client';
import { categories } from '@/prisma/constants/categories.constants';

export class CategoriesService {
    private static getBaseItems(): Prisma.CategoryCreateManyInput[] {
        return categories;
    }

    public static async createBaseItems() {
        await prisma.category.createMany({
            data: this.getBaseItems(),
        });
    }

    public static async clearCollectionData() {
        await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE;`;
    }
}
