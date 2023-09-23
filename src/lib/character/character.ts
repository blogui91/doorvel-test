import { api } from "@/http"
import { Character } from "./types"
import { ApiResponse } from "../types";
import { AxiosError } from "axios";
import { emptyResponse } from "@/utils";



export const getCharacters = async (params = {}) => {
  try {
    const response = await api.get<ApiResponse<Character>>('character', {
      params,
    });
  
    return response.data;
  } catch (error: unknown) {
    const err = error as AxiosError;

    if (err.response?.status === 404) {
      return emptyResponse()
    }

    throw error;
  }
}

export const getCharacter = async (id: number|string) => {
  const response = await api.get<Character>(`character/${id}`);

  return response.data;
}