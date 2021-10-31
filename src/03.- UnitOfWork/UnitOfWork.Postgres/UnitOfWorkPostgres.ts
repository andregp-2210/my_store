import { config } from "../../06.- Commons/Config";
import { IUnitOfWork } from "../UnitOfWork.Interfaces/IUnitOfWork";
import { IUnitOfWorkAdapter } from "../UnitOfWork.Interfaces/IUnitOfWorkAdapter";
import { UnitOfWorkPostgresAdapter } from "./UnitOfWorkPostgresAdapter";

const USER = encodeURIComponent(config.dbUser as string);
const PASSWORD = encodeURIComponent(config.dbPassword as string);
const connectionString = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

export class UnitOfWorkPostgres implements IUnitOfWork {
  private unitOfWork: UnitOfWorkPostgresAdapter;

  Create(): IUnitOfWorkAdapter {
    this.unitOfWork = new UnitOfWorkPostgresAdapter(connectionString);
    return this.unitOfWork;
  }
  Dispose(): void {
    this.unitOfWork.dispose();
  }
}
