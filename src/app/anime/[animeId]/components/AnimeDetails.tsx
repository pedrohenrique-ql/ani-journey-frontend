import { Anime } from '@/clients/anime/AnimeClient';
import AnimeCard from '@/components/common/AnimeCard';
import ReturnLink from '@/components/common/ReturnLink';

interface Props {
  anime: Anime;
}

function AnimeDetails({ anime }: Props) {
  return (
    <div className="space-y-8">
      <ReturnLink href="/" />

      <div className="flex flex-row space-x-10">
        <div className="flex flex-shrink-0 flex-col space-y-2">
          <AnimeCard imageUrl={anime.image} imageClassName="h-72 w-52" />
          <p>Ano de lançamento: {anime.releaseAir}</p>
          <p>Status: {anime.status}</p>
          <p>N° de episódios: {anime.episodes} episódios</p>
          <p>Avaliação: {anime.rating}</p>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold">{anime.englishTitle}</h1>
            <h2 className="text-xl">{anime.japaneseTitle}</h2>
          </div>

          <p>{anime.synopsis}</p>
        </div>
      </div>
    </div>
  );
}

export default AnimeDetails;
