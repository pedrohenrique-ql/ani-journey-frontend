import clsx from 'clsx';
import Image from 'next/image';

interface Props {
  imageUrl: string;
  className?: string;
  imageClassName?: string;
}

function AnimeCard({ imageUrl, className, imageClassName }: Props) {
  return (
    <div className={clsx('rounded-xl', className)}>
      <Image
        alt="Anime Image"
        src={imageUrl}
        priority
        width={150}
        height={250}
        className={clsx('rounded-xl lg:h-64 lg:w-48 2xl:h-[17rem] 2xl:w-48', imageClassName)}
      />
    </div>
  );
}

export default AnimeCard;
