import { UserService } from '@/prisma/services/user.service';
import { CategoryService } from '@/prisma/services/category.service';

export class CommonService {
    public static async clearAllCollections() {
        await UserService.clearCollectionData();
        await CategoryService.clearCollectionData();
    }
}
