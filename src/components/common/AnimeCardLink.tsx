import Link from 'next/link';

import { Anime } from '@/clients/anime/AnimeClient';

import AnimeCard from './AnimeCard';

interface Props {
  imageUrl: string;
  animeId: Anime['id'];
}

function AnimeCardLink({ imageUrl, animeId }: Props) {
  return (
    <Link href={`/anime/${animeId}`}>
      <AnimeCard
        imageUrl={imageUrl}
        className="transition-shadow transition-transform hover:scale-105 hover:shadow-xl-blue"
      />
    </Link>
  );
}

export default AnimeCardLink;
