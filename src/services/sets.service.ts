import { TSet, TSetDto } from "../types/set.type";
import { apiService } from "./api.service.";

async function remove(id: string) {
  return await apiService.delete(`sets/${id}`);
}

async function create(data:TSetDto):Promise<TSet> {
  return await apiService.post("sets/edit", data);
}

export const setsService = {
  remove,
  create
};
