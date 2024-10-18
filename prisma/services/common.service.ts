import { UsersService } from '@/prisma/services/users.service';
import { CategoriesService } from '@/prisma/services/categories.service';
import { ProductsService } from '@/prisma/services/products.service';

export class CommonService {
    public static async clearAllCollections() {
        await UsersService.clearCollectionData();
        await CategoriesService.clearCollectionData();
        await ProductsService.clearCollectionData();
    }
}
