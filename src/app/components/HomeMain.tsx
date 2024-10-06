import AnimeCard from '@/components/common/AnimeCard';
import useAnimeList from '@/hooks/useAnimeList';

function HomeMain() {
  const { list: animeList, isLoading } = useAnimeList();

  return (
    <div className="m-20 flex justify-center">
      {isLoading && <div>Loading...</div>}

      {!isLoading && (
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {animeList.map((anime) => (
            <AnimeCard key={anime.id} imageUrl={anime.image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default HomeMain;
