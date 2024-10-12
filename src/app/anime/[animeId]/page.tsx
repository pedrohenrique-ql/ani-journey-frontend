'use client';

import { Anime } from '@/clients/anime/AnimeClient';
import LoadingPage from '@/components/common/LoadingPage';
import useAnime from '@/hooks/useAnime';

import AnimeDetails from './components/AnimeDetails';

interface PageParams {
  animeId: Anime['id'];
}

interface Props {
  params: PageParams;
}

function AnimePage({ params }: Props) {
  const { animeId } = params;
  const { data: anime, isLoading } = useAnime(animeId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (!anime) {
    return <div>Not found</div>;
  }

  return (
    <div className="mx-52 mt-20 rounded-xl bg-surface-dark-400 p-8">
      <div className="flex justify-center">
        <AnimeDetails anime={anime} />
      </div>
    </div>
  );
}

export default AnimePage;
