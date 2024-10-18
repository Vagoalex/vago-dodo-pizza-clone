import { prisma } from '@/prisma/prisma-client';
import { UsersService } from '@/prisma/services/users.service';
import { CategoriesService } from '@/prisma/services/categories.service';
import { CommonService } from '@/prisma/services/common.service';
import { IngredientsService } from '@/prisma/services/ingredients.service';

async function generate() {
    await UsersService.createBaseItems();
    await CategoriesService.createBaseItems();
    await IngredientsService.createBaseItems();
}

async function clear() {
    await CommonService.clearAllCollections();
}

async function main() {
    try {
        await clear();
        await generate();
    } catch (error) {
        console.error(error);
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
