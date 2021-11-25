import { Client } from 'pg';

import { Category } from "../../01.- Model/Category";
import { ICategoryRepository } from "../Repository.Interface/ICategoryRepository";
import { BaseRepository } from "./BaseRepository";

export class CategoryRepository extends BaseRepository implements ICategoryRepository {

    //#region   Constructor
    constructor(context: Client) {
        super();
        this._context = context;
    }
    //#endregion
    //#region   Select
    async getAll(): Promise<Category[]> {
        const res = await this._context.query('SELECT * FROM  product_category_get_all()')
        return this.readCategories(res.rows);
    }
    async get(id: number): Promise<Category> {
        const query = {
            text: 'SELECT * FROM  product_category_get_by_id($1)',
            values: [id]
        }
        const res = await this._context.query(query)
        return this.readCategory(res.rows[0]);
    }
    //#endregion
    //#region   Insert
    async create(category: Category): Promise<Category> {
        const query = {
            text: 'select product_category_insert($1)',
            values: [category.name]
        }
        const res = await this._context.query(query)
        // "rowCount": 1,
        return res.rows[0].product_category_insert;
    }
    //#endregion
    //#region   Delete
    async remove(id: number): Promise<void> {
        const query = {
            text: 'SELECT * FROM  product_category_delete($1)',
            values: [id]
        }
        const res = await this._context.query(query)
        console.log(res.rows[0])
        return res;
    }
    //#endregion
    //#region   Update
    async update(category: Category): Promise<Category> {
        const query = {
            text: 'SELECT * FROM  product_category_update($1,$2)',
            values: [category.id, category.name]
        }
        const res = await this._context.query(query)
        return res.rows[0];
    }
    //#endregion
    //#region Readers
    readCategories(dbCategory: []): Category[] {
        return dbCategory.map(({ id, name }) => {
            const category = new Category();
            category.id = id;
            category.name = name;
            return category;
        });
    }
    readCategory(dbCategory): Category {
        const category = new Category();
        category.id = dbCategory.id;
        category.name = dbCategory.name;
        return category;
    }
    //#endregion
}