import type { Anime } from '$lib/types/anime';

export interface Api {
  apiUrl: string;
  malSecret?: string;
  getAnimeList: (username: string) => Promise<Anime[]>;
}
