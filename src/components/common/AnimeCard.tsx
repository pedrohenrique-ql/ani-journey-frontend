import Image from 'next/image';

interface Props {
  imageUrl: string;
}

function AnimeCard({ imageUrl }: Props) {
  return (
    <div className="rounded-xl transition-shadow transition-transform hover:scale-105 hover:shadow-xl">
      <Image
        alt="Anime Image"
        src={imageUrl}
        priority={false}
        width={150}
        height={50}
        className="h-56 w-40 rounded-xl"
      />
    </div>
  );
}

export default AnimeCard;
