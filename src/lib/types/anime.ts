export type Anime = {
  id: number;
  title: string;
  thumbnailUrl: string;
  currentEpisode: number;
  numberAiredEpisodes: number | null;
  endDate: Date;
  numberEpisodes: number;
};
