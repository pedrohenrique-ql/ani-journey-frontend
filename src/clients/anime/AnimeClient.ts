import { AxiosInstance } from 'axios';

export interface AnimeSearchQuery {
  title?: string;
  page?: number;
  perPage?: number;
}

export interface Anime {
  id: number;
  englishTitle?: string;
  japaneseTitle: string;
  episodes: number;
  synopsis: string;
  image: string;
  status: string;
  releaseAir: number;
  rating: number;
  favorites: number;
}

export interface AnimeSearchResponse {
  total: number;
  animeList: Anime[];
}

class AnimeClient {
  constructor(private http: AxiosInstance) {}

  async searchAnime(animeSearchQuery: AnimeSearchQuery) {
    const response = await this.http.get<AnimeSearchResponse>('/anime', {
      params: animeSearchQuery,
    });

    return response.data;
  }
}

export default AnimeClient;
