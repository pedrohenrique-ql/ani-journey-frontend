import { InfiniteData, QueryKey, useInfiniteQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

import { AnimeSearchQuery, AnimeSearchResponse } from '@/clients/anime/AnimeClient';

import useAPI from './useAPI';

const DEFAULT_PAGE_SIZE = 18;

const EMPTY_ANIME_SEARCH_PAGES = [] as const;

interface AnimeSearchPageParams {
  page: number;
  pageSize: number;
}

const animeSearchKey = {
  byFilters(filters: AnimeSearchQuery) {
    return ['anime-search', filters] as const;
  },
};

function useAnimeList(filters: AnimeSearchQuery = {}, options: { enabled?: boolean } = {}) {
  const api = useAPI();

  const pageSize = filters.pageSize ?? DEFAULT_PAGE_SIZE;

  const {
    data: { pages: animeSearchPages = EMPTY_ANIME_SEARCH_PAGES } = {},
    isLoading,
    isFetchingNextPage,
    isSuccess,
    error,
    fetchNextPage,
    refetch,
    hasNextPage,
  } = useInfiniteQuery<AnimeSearchResponse, Error, InfiniteData<AnimeSearchResponse>, QueryKey, AnimeSearchPageParams>({
    queryKey: animeSearchKey.byFilters(filters),
    queryFn: ({ pageParam: { page, pageSize } }) => {
      return api.aniJourney.anime.searchAnime({
        ...filters,
        page,
        pageSize,
      });
    },
    initialPageParam: { page: 1, pageSize },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.animeList.length < pageSize ? undefined : { page: allPages.length + 1, pageSize };
    },
    enabled: options.enabled,
  });

  const animeList = useMemo(() => {
    return animeSearchPages.flatMap((page) => page.animeList);
  }, [animeSearchPages]);

  const total = useMemo(() => {
    return animeSearchPages.length > 0 ? animeSearchPages[0].total : 0;
  }, [animeSearchPages]);

  return {
    list: animeList,
    total,
    isLoading,
    isFetchingNextPage,
    isSuccess,
    hasNextPage,
    error,
    fetchNextPage,
    refetch,
  };
}

export default useAnimeList;
