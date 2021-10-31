import { Product } from "../../01.- Model/Product";
import { IProductRepository } from "../Repository.Interface/IProductRepository";
import { BaseRepository } from "./BaseRepository";

export class ProductRepository extends BaseRepository implements IProductRepository {
    create(t: Product): Promise<Product> {
        throw new Error("Method not implemented.");
    }
    getAll(): Promise<Product[]> {
        throw new Error("Method not implemented.");
    }
    get(id: number): Promise<Product> {
        throw new Error("Method not implemented.");
    }
    remove(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
    update(t: Product): Promise<Product> {
        throw new Error("Method not implemented.");
    }

}