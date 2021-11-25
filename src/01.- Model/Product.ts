import { BaseAudit } from "./BaseAudit";
import { Category } from "./Category";

export class Product extends BaseAudit {
    public id: number;
    public name: string;
    public description: string;
    public price: number;
    public categoryId: number;
    public category: Category = new Category();
    public inventoryId?: number;
    public discountId?: number;
}