import { Category } from "../01.- Model/Category";
import { IUnitOfWork } from "../03.- UnitOfWork/UnitOfWork.Interfaces/IUnitOfWork";
import { IUnitOfWorkAdapter } from "../03.- UnitOfWork/UnitOfWork.Interfaces/IUnitOfWorkAdapter";

export class CategoryService {
    private _unitOfWork: IUnitOfWork;
    private _context: IUnitOfWorkAdapter;
    //#region Constructor
    constructor(unitOfWork: IUnitOfWork) {
        this._unitOfWork = unitOfWork;
    }
    //#endregion
    //#region   Select
    async getAll(): Promise<Category[]> {
        try {
            this._context = this._unitOfWork.Create();
            return this._context.Repositories.CategoryRepository.getAll();
        } catch (error) {
            console.log(error)
        } finally {
            this._unitOfWork.Dispose();
        }
    }
    async get(id: number): Promise<Category> {
        try {
            this._context = this._unitOfWork.Create();
            return this._context.Repositories.CategoryRepository.get(id);
        } catch (error) {
            console.log(error)
        } finally {
            this._unitOfWork.Dispose();
        }
    }
    //#endregion
    //#region   Insert
    async create(category: Category): Promise<Category> {
        try {
            this._context = this._unitOfWork.Create();
            return this._context.Repositories.CategoryRepository.create(category);
        } catch (error) {
            console.log(error)
        } finally {
            this._unitOfWork.Dispose();
        }
    }
    //#endregion
    //#region   Delete
    async remove(id: number): Promise<void> {
        try {
            this._context = this._unitOfWork.Create();
            return this._context.Repositories.CategoryRepository.remove(id);
        } catch (error) {
            console.log(error)
        } finally {
            this._unitOfWork.Dispose();
        }
    }
    //#endregion
    //#region   Update
    async update(category: Category): Promise<Category> {
        try {
            this._context = this._unitOfWork.Create();
            return this._context.Repositories.CategoryRepository.update(category);
        } catch (error) {
            console.log(error)
        } finally {
            this._unitOfWork.Dispose();
        }
    }
    //#endregion
}