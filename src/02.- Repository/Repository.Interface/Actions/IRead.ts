export interface IRead<T, Y> {
  getAll(): Promise<T[]>;
  get(id: Y): Promise<T>;
}
