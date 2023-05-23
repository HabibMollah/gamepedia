import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

function GamesGrid() {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding={'10px'}>
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {games.map((game) => (
          <GameCard
            key={game.id}
            game={game}
            platforms={game.parent_platforms}
            metacritic={game.metacritic}
          />
        ))}
      </SimpleGrid>
    </div>
  );
}

export default GamesGrid;
