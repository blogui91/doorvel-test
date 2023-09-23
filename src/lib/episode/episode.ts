import { api } from "@/http";
import { Episode } from "./types";

export const getOneOrMoreEpisodes = async (ids: string[]|number[], params = {}) => {
    const response = await api.get<Episode[]>(`episode/${ids.map(id => id.toString()).join(',')}`, {
        params,
    });

    if (! Array.isArray(response.data)) {
        response.data = [response.data];
    }

    return response.data;
}
    