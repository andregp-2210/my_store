import { ICategoryRepository } from "../../02.- Repository/Repository.Interface/ICategoryRepository";
import { IProductRepository } from "../../02.- Repository/Repository.Interface/IProductRepository";

export interface IUnitOfWorkRepository {
  CategoryRepository: ICategoryRepository,
  ProductRepository: IProductRepository,
}
