import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';

interface Props {
  selectedGenre: string;
}

function GamesGrid({ selectedGenre }: Props) {
  const { data, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4, '2xl': 5 }}
        spacing={3}
        padding={'10px'}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data
          .filter((game) => {
            if (!selectedGenre) return true;
            let willPass = false;
            for (const genreObj of game.genres) {
              if (genreObj.slug === selectedGenre) willPass = true;
            }
            return willPass;
          })
          .map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard
                game={game}
                platforms={game.parent_platforms}
                metacritic={game.metacritic}
              />
            </GameCardContainer>
          ))}
      </SimpleGrid>
    </div>
  );
}

export default GamesGrid;
