import Link from 'next/link';

import { Anime } from '@/clients/anime/AnimeClient';

import AnimeCard from './AnimeCard';

interface Props {
  imageUrl: string;
  animeId: Anime['id'];
}

/** Link de um anime ao clicar em sua imagem */
function AnimeCardLink({ imageUrl, animeId }: Props) {
  return (
    <Link href={`/anime/${animeId}`}>
      <AnimeCard
        imageUrl={imageUrl}
        className="transition-shadow transition-transform hover:scale-105 hover:shadow-xl-blue"
        imageClassName="h-64 w-48 2xl:h-[17rem] 2xl:w-48"
      />
    </Link>
  );
}

export default AnimeCardLink;
