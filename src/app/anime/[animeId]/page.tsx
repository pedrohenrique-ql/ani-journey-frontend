'use client';

import { Anime } from '@/clients/anime/AnimeClient';
import LoadingPage from '@/components/common/LoadingPage';
import useAnime from '@/hooks/useAnime';

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
    <div className="mx-44 mt-20 rounded-lg bg-surface-dark-200 p-8">
      <div className="flex justify-center">
        <div className="flex space-x-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">{anime.japaneseTitle}</h1>
            <h2 className="text-2xl">{anime.englishTitle}</h2>
            <p>{anime.synopsis}</p>
            <p>N° de episódios: {anime.episodes} episódios</p>
            <p>Status: {anime.status}</p>
            <p>Ano de lançamento: {anime.releaseAir}</p>
            <p>Avaliação: {anime.rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimePage;
