import { MessageResult } from "./MessageResult";

export class Result<T>{
    public result: T;
    public message: MessageResult;
}