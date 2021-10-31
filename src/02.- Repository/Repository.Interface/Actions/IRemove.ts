export interface IRemove<T> {
  remove(id: T): Promise<void>;
}
