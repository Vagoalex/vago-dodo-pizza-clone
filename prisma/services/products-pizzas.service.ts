import { Prisma } from '@prisma/client';
import { productsPizzas } from '@/prisma/constants/products.constants';
import { prisma } from '@/prisma/prisma-client';

export class ProductsPizzasService {
    private static getBasePizzaItems(): Prisma.ProductUncheckedCreateWithoutVariantsInput[] {
        return productsPizzas;
    }

    public static async createBasePizzaItems() {
        await prisma.product.createMany({
            data: this.getBasePizzaItems(),
        });
    }
}
