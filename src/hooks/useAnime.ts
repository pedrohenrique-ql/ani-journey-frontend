import { useQuery } from '@tanstack/react-query';

import { Anime } from '@/clients/anime/AnimeClient';

import useAPI from './useAPI';

const animeSearchKey = {
  byId(filters: { animeId?: Anime['id'] }) {
    return ['anime', filters] as const;
  },
};

function useAnime(animeId?: Anime['id']) {
  const api = useAPI();

  const {
    data: anime,
    isLoading,
    isSuccess,
    isError,
  } = useQuery<Anime>({
    queryKey: animeSearchKey.byId({ animeId }),
    queryFn() {
      if (animeId === undefined) {
        throw new Error('Anime ID is required.');
      }

      return api.aniJourney.anime.getById(animeId);
    },
    enabled: animeId !== undefined,
  });

  return {
    data: anime,
    isLoading,
    isSuccess,
    isError,
  };
}

export default useAnime;
