export interface IUpdate<T> {
  update(t: T): Promise<T>;
}
