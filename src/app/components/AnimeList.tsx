import { UseInfiniteScrollHookRefCallback } from 'react-infinite-scroll-hook';

import { Anime } from '@/clients/anime/AnimeClient';
import AnimeCard from '@/components/common/AnimeCard';
import LoadingIcon from '@/components/icons/LoadingIcon';

interface Props {
  animeList: Anime[];
  hasNextPage: boolean;
  sentryRef: UseInfiniteScrollHookRefCallback;
}

function AnimeList({ animeList, hasNextPage, sentryRef }: Props) {
  return (
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
  );
}

export default AnimeList;
