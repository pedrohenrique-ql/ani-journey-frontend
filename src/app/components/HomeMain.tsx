'use client';

import { useDebounce } from '@uidotdev/usehooks';
import { useState } from 'react';
import useInfiniteScroll from 'react-infinite-scroll-hook';

import AnimeCard from '@/components/common/AnimeCard';
import Input from '@/components/common/Input';
import LoadingIcon from '@/components/icons/LoadingIcon';
import useAnimeList from '@/hooks/useAnimeList';

function HomeMain() {
  const [animeSearchTerm, setAnimeSearchTerm] = useState<string>('');
  const debouncedSearchTerm = useDebounce(animeSearchTerm, 500);

  const {
    list: animeList,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    error,
  } = useAnimeList(
    {
      title: debouncedSearchTerm,
    },
    { enabled: debouncedSearchTerm === '' || !!debouncedSearchTerm },
  );

  const [sentryRef] = useInfiniteScroll({
    loading: isFetchingNextPage,
    hasNextPage: !!hasNextPage,
    onLoadMore: fetchNextPage,
    disabled: !!error,
    rootMargin: '0px 0px 400px 0px',
  });

  return (
    <div className="m-20 flex justify-center">
      <div className="space-y-16">
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-center text-6xl font-bold">
              <span className="text-blue-500">Ani</span>
              <span>Journey</span>
            </h1>
            <p className="text-center text-xl">Acompanhe e compartilhe sua jornada de animes.</p>
          </div>

          <Input
            label="Pesquisar"
            labelAsPlaceholder
            className="mx-auto w-[50rem]"
            onChange={(event) => {
              setAnimeSearchTerm(event.target.value);
            }}
          />
        </div>

        <div className="flex justify-center">
          {isLoading && <LoadingIcon role="img" alt="Carregando..." className="h-8 w-8" />}

          {!isLoading && (
            <section className="grid grid-cols-1 justify-center gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-6">
              {animeList.map((anime) => (
                <AnimeCard key={anime.id} imageUrl={anime.image} animeId={anime.id} />
              ))}

              {hasNextPage && (
                <div className="col-span-full flex w-full justify-center" ref={sentryRef}>
                  <LoadingIcon role="img" alt="Carregando..." className="h-8 w-8" />
                </div>
              )}
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomeMain;
