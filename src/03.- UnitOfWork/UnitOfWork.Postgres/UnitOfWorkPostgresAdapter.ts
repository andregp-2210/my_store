import { Client } from 'pg';
import { IUnitOfWorkAdapter } from "../UnitOfWork.Interfaces/IUnitOfWorkAdapter";
import { IUnitOfWorkRepository } from "../UnitOfWork.Interfaces/IUnitOfWorkRepository";
import { UnitOfWorkPostgresRepository } from "./UnitOfWorkPostgresRepository";




export class UnitOfWorkPostgresAdapter implements IUnitOfWorkAdapter {
  _context: Client;
  Repositories: IUnitOfWorkRepository;
  constructor(connectionString: string) {
    this._context = new Client({
      connectionString,
    })
    this.connectClient();
    this.Repositories = new UnitOfWorkPostgresRepository(this._context);
  }
  async connectClient(): Promise<void> {
    await this._context.connect();
  }
  public dispose(): void {
    this._context.end();
  }


}
