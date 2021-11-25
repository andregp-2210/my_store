
import { Client } from "pg"
import { ICategoryRepository } from "../../02.- Repository/Repository.Interface/ICategoryRepository";
import { IProductRepository } from "../../02.- Repository/Repository.Interface/IProductRepository";
import { CategoryRepository } from "../../02.- Repository/Repository.Postgres/CategoryRepository";
import { ProductRepository } from "../../02.- Repository/Repository.Postgres/ProductRepository";
import { IUnitOfWorkRepository } from "../UnitOfWork.Interfaces/IUnitOfWorkRepository";


export class UnitOfWorkPostgresRepository implements IUnitOfWorkRepository {
  CategoryRepository: ICategoryRepository;
  ProductRepository: IProductRepository;

  constructor(context: Client) {
    this.CategoryRepository = new CategoryRepository(context);
    this.ProductRepository = new ProductRepository(context);
  }
}
