import Image from 'next/image';
import Link from 'next/link';

import { Anime } from '@/clients/anime/AnimeClient';

interface Props {
  imageUrl: string;
  animeId: Anime['id'];
}

function AnimeCard({ imageUrl, animeId }: Props) {
  return (
    <Link href={`/anime/${animeId}`}>
      <div className="rounded-xl transition-shadow transition-transform hover:scale-105 hover:shadow-xl-blue">
        <Image
          alt="Anime Image"
          src={imageUrl}
          priority
          width={150}
          height={250}
          className="rounded-xl lg:h-64 lg:w-48 2xl:h-[17rem] 2xl:w-48"
        />
      </div>
    </Link>
  );
}

export default AnimeCard;
