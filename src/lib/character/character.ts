import { api } from "@/http"
import { Character } from "./types"
import { ApiResponse } from "../types";


export const getCharacters = async (params = {}) => {
  const response = await api.get<ApiResponse<Character>>('character', {
    params,
  });

  return response.data;
}

export const getCharacter = async (id: number|string) => {
  const response = await api.get<Character>(`character/${id}`);

  return response.data;
}