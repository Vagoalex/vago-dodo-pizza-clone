import { prisma } from '@/prisma/prisma-client';
import { UserService } from '@/prisma/services/user.service';
import { CategoryService } from '@/prisma/services/category.service';
import { CommonService } from '@/prisma/services/common.service';

async function generate() {
    await UserService.createBaseUsers();
    await CategoryService.createBaseCategories();
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
