
import { Client } from "pg"
import { ICategoryRepository } from "../../02.- Repository/Repository.Interface/ICategoryRepository";
import { CategoryRepository } from "../../02.- Repository/Repository.Postgres/CategoryRepository";
import { IUnitOfWorkRepository } from "../UnitOfWork.Interfaces/IUnitOfWorkRepository";


export class UnitOfWorkPostgresRepository implements IUnitOfWorkRepository {
  CategoryRepository: ICategoryRepository;

  constructor(context: Client) {
    this.CategoryRepository = new CategoryRepository(context);
  }
}
