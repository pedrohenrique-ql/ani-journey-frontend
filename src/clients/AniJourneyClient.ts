import axios from 'axios';

import environment from '@/config/environment';

import AnimeClient from './anime/AnimeClient';

class AniJourneyClient {
  private http = axios.create({
    baseURL: environment.NEXT_PUBLIC_ANI_JOURNEY_API_URL,
  });

  anime: AnimeClient;

  constructor() {
    this.anime = new AnimeClient(this.http);
  }
}

export default AniJourneyClient;
