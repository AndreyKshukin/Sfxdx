import { CommonModel } from "@models";

export interface IApiMethod<T extends CommonModel> {
  getAll(): Promise<T[]> 
  searchData(search: String): Promise<T[]>
  fetchById(dix: String): Promise<T | null>
}