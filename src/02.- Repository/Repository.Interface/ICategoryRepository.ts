import { Category } from "../../01.- Model/Category";
import { ICreate } from "./Actions/ICreate";
import { IRead } from "./Actions/IRead";
import { IRemove } from "./Actions/IRemove";
import { IUpdate } from "./Actions/IUpdate";

export interface ICategoryRepository extends ICreate<Category>, IRead<Category, number>, IRemove<number>, IUpdate<Category> {

}