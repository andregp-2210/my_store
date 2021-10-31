import { Product } from "../../01.- Model/Product";
import { ICreate } from "./Actions/ICreate";
import { IRead } from "./Actions/IRead";
import { IRemove } from "./Actions/IRemove";
import { IUpdate } from "./Actions/IUpdate";

export interface IProductRepository extends ICreate<Product>, IRead<Product, number>, IRemove<number>, IUpdate<Product> {

}
