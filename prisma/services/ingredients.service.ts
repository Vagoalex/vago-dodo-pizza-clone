import { Prisma } from '@prisma/client';
import { prisma } from '@/prisma/prisma-client';
import { ingredients } from '@/prisma/constants/ingredients.constants';

export class IngredientsService {
    private static getBaseItems(): Prisma.IngredientCreateManyInput[] {
        return ingredients;
    }

    public static async createBaseItems() {
        await prisma.ingredient.createMany({
            data: this.getBaseItems(),
        });
    }

    public static async clearCollectionData() {
        await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE;`;
    }
}
