import { MyAnimeListApi } from '$lib/server/myanimelist';
import type { Domain } from '$lib/types/domain';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }: { params: { username: string; domain: Domain } }) {
  return {
    username: params.username,
    watchingList: new MyAnimeListApi().getAnimeList(params.username),
  };
}
