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
        try {
            const res = await this._context.query('SELECT * FROM  product_category_get_all()')
            console.log(res.rows)
            return res;
        } catch (err) {
            console.log(err.stack)
        }
    }
    async get(id: number): Promise<Category> {
        try {
            const query = {
                text: 'SELECT * FROM  product_category_get_by_id($1)',
                values: [id]
            }
            const res = await this._context.query(query)
            console.log(res.rows)
            return res;
        } catch (err) {
            console.log(err.stack)
        }
    }
    //#endregion
    //#region   Insert
    async create(category: Category): Promise<Category> {
        try {
            const query = {
                text: 'select product_category_insert($1)',
                values: [category.name]
            }
            const res = await this._context.query(query)
            console.log(res.rows[0])
            return res;
        } catch (err) {
            console.log(err.stack)
        }
    }
    //#endregion
    //#region   Delete
    async remove(id: number): Promise<void> {
        try {
            const query = {
                text: 'SELECT * FROM  product_category_delete($1)',
                values: [id]
            }
            const res = await this._context.query(query)
            console.log(res.rows[0])
            return res;
        } catch (err) {
            console.log(err.stack)
        }
    }
    //#endregion
    //#region   Update
    async update(category: Category): Promise<Category> {
        try {
            const query = {
                text: 'SELECT * FROM  product_category_update($1,$2)',
                values: [category.id, category.name]
            }
            const res = await this._context.query(query)
            console.log(res.rows[0])
            return res;
        } catch (err) {
            console.log(err.stack)
        }
    }
    //#endregion
}