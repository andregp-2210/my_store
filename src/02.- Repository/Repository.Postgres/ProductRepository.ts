import { Client } from 'pg';
import { Category } from '../../01.- Model/Category';
import { Product } from "../../01.- Model/Product";
import { IProductRepository } from "../Repository.Interface/IProductRepository";
import { BaseRepository } from "./BaseRepository";
import { CategoryRepository } from './CategoryRepository';

export class ProductRepository extends BaseRepository implements IProductRepository {
    //#region   Constructor
    constructor(context: Client) {
        super();
        this._context = context;
    }
    //#endregion
    //#region   Select
    async getAll(): Promise<Product[]> {
        const { rows: dbProducts } = await this._context.query('SELECT * FROM  product_get_all()');
        const products: Product[] = this.readProducts(dbProducts);
        for (let index = 0; index < products.length; index++) {
            products[index].category = await this.getProductCategory(products[index].categoryId);
        }
        return products;
    }
    async get(id: number): Promise<Product> {
        let product = new Product();
        const query = {
            text: 'SELECT * FROM  product_get_by_id($1)',
            values: [id]
        }
        const { rows: dbProduct } = await this._context.query(query)
        product = this.readProduct(dbProduct[0])
        product.category = await this.getProductCategory(product.categoryId);
        return product;
    }
    //#endregion
    //#region   Insert
    async create(product: Product): Promise<Product> {
        const query = {
            text: 'select product_insert($1,$2,$3,$4,$5,$6)',
            values: [
                product.name,
                product.description,
                product.price,
                product.categoryId,
                product.inventoryId,
                product.discountId
            ]
        }
        const res = await this._context.query(query)
        return res.rows[0].product_insert;
    }
    //#endregion
    //#region   Delete
    async remove(id: number): Promise<void> {
        const query = {
            text: 'SELECT * FROM  product_delete($1)',
            values: [id]
        }
        const res = await this._context.query(query)
        console.log(res)
        return res;
    }
    //#endregion
    //#region   Update
    async update(product: Product): Promise<Product> {
        const query = {
            text: 'SELECT * FROM  product_update($1,$2,$3,$4,$5,$6,$7)',
            values: [
                product.id,
                product.name,
                product.description,
                product.price,
                product.categoryId,
                product.inventoryId,
                product.discountId
            ]
        }
        const res = await this._context.query(query)
        return res.rows[0];
    }
    //#endregion
    //#region Readers
    readProducts(dbProducts: []): Product[] {
        return dbProducts.map(({ id, name, description, price, product_category_id, product_inventory_id, product_discount_id }) => {
            const product = new Product();
            product.id = id;
            product.name = name;
            product.description = description;
            product.price = price;
            product.categoryId = product_category_id;
            product.inventoryId = product_inventory_id;
            product.discountId = product_discount_id;
            return product;
        });
    }
    readProduct(dbProduct): Product {
        const product = new Product();
        product.id = dbProduct.id;
        product.name = dbProduct.name;
        product.description = dbProduct.description;
        product.price = dbProduct.price;
        product.categoryId = dbProduct.product_category_id;
        product.inventoryId = dbProduct.product_inventory_id;
        product.discountId = dbProduct.product_discount_id;
        return product;
    }
    async getProductCategory(categoryId: number): Promise<Category> {
        const categoryRepository = new CategoryRepository(this._context);
        return await categoryRepository.get(categoryId);
    }
    //#endregion
}