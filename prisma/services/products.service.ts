import { Prisma } from '@prisma/client';
import { prisma } from '@/prisma/prisma-client';
import { products } from '@/prisma/constants/products.constants';

export class ProductsService {
    private static getBaseItems(): Prisma.ProductCreateManyInput[] {
        return products;
    }

    public static async createBaseItems() {
        await prisma.product.createMany({
            data: this.getBaseItems(),
        });
    }

    public static async clearCollectionData() {
        await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE;`;
    }
}
