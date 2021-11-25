import { Product } from "../01.- Model/Product";
import { IUnitOfWork } from "../03.- UnitOfWork/UnitOfWork.Interfaces/IUnitOfWork";
import { IUnitOfWorkAdapter } from "../03.- UnitOfWork/UnitOfWork.Interfaces/IUnitOfWorkAdapter";

export class ProductService {
    private _unitOfWork: IUnitOfWork;
    private _context: IUnitOfWorkAdapter;
    //#region Constructor
    constructor(unitOfWork: IUnitOfWork) {
        this._unitOfWork = unitOfWork;
    }
    //#endregion
    //#region   Select
    async getAll(): Promise<Product[]> {
        try {
            this._context = this._unitOfWork.Create();
            return this._context.Repositories.ProductRepository.getAll();
        } catch (error) {
            console.log(error)
        }
    }
    async get(id: number): Promise<Product> {
        try {
            this._context = this._unitOfWork.Create();
            return this._context.Repositories.ProductRepository.get(id);
        } catch (error) {
            console.log(error)
        }
    }
    //#endregion
    //#region   Insert
    async create(product: Product): Promise<Product> {
        try {
            this._context = this._unitOfWork.Create();
            return this._context.Repositories.ProductRepository.create(product);
        } catch (error) {
            console.log(error)
        }
    }
    //#endregion
    //#region   Delete
    async remove(id: number): Promise<void> {
        try {
            this._context = this._unitOfWork.Create();
            return this._context.Repositories.ProductRepository.remove(id);
        } catch (error) {
            console.log(error)
        }
    }
    //#endregion
    //#region   Update
    async update(product: Product): Promise<Product> {
        try {
            this._context = this._unitOfWork.Create();
            return this._context.Repositories.ProductRepository.update(product);
        } catch (error) {
            console.log(error)
        }
    }
    //#endregion
}