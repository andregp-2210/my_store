import { IUnitOfWorkAdapter } from "./IUnitOfWorkAdapter";

export interface IUnitOfWork {
  Create(): IUnitOfWorkAdapter;
  Dispose(): void;
}
