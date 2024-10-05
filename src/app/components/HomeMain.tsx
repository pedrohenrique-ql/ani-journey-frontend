import AnimeCard from '@/components/common/AnimeCard';

const animeImages = [
  'https://cdn.myanimelist.net/images/anime/1079/133529l.jpg',
  'https://cdn.myanimelist.net/images/anime/1079/133529l.jpg',
  'https://cdn.myanimelist.net/images/anime/1079/133529l.jpg',
  'https://cdn.myanimelist.net/images/anime/1079/133529l.jpg',
  'https://cdn.myanimelist.net/images/anime/12/49655l.jpg',
  'https://cdn.myanimelist.net/images/anime/12/49655l.jpg',
  'https://cdn.myanimelist.net/images/anime/1079/133529l.jpg',
  'https://cdn.myanimelist.net/images/anime/1079/133529l.jpg',
  'https://cdn.myanimelist.net/images/anime/1079/133529l.jpg',
  'https://cdn.myanimelist.net/images/anime/1079/133529l.jpg',
  'https://cdn.myanimelist.net/images/anime/12/49655l.jpg',
  'https://cdn.myanimelist.net/images/anime/12/49655l.jpg',
];

function HomeMain() {
  return (
    <div className="m-20 flex justify-center">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {animeImages.map((image, index) => (
          <AnimeCard key={`${image}-${index}`} imageUrl={image} />
        ))}
      </div>
    </div>
  );
}

export default HomeMain;
