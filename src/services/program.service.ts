import { TProgram, TProgramDto } from "../types/program.type";
import { apiService } from "./api.service.";

async function create(dto: TProgramDto): Promise<TProgram> {
  const data = await apiService.post<TProgram>("program/edit", dto);
  return {
    ...data,
    startDate: new Date(data.startDate),
    endDate: new Date(data.endDate),
  };
}
async function update(program: TProgram): Promise<TProgram> {
  return program;
}

async function getById(id: string) {
  return apiService.get<TProgram>(`/programs/${id}`);
}

async function get(filter: Partial<TProgram>): Promise<TProgram[]> {
  const apiEndPoint = `user/?${filter}`;
  return await apiService.get<TProgram[]>(apiEndPoint);
}
export const programService = {
  create,
  update,
  get,
  getById,
};
