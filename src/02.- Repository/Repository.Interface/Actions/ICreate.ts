export interface ICreate<T> {
  create(t: T): Promise<T>;
}
