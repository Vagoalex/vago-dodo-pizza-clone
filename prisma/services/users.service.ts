import { Prisma } from '@prisma/client';
import { hashSync } from 'bcrypt';
import { prisma } from '@/prisma/prisma-client';

export class UsersService {
    public static getBaseItems(): Prisma.UserCreateInput[] {
        return [
            {
                fullName: 'User TEST',
                email: 'user@test.com',
                password: hashSync('11111', 10),
                verifiedAt: new Date(),
                role: 'USER',
            },
            {
                fullName: 'Admin TEST',
                email: 'admin@test.com',
                password: hashSync('11111', 10),
                verifiedAt: new Date(),
                role: 'ADMIN',
            },
        ];
    }

    public static async createBaseItems() {
        await prisma.user.createMany({
            data: this.getBaseItems(),
        });
    }

    public static async clearCollectionData() {
        await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE;`;
    }
}
