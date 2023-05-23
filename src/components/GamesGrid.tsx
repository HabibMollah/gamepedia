import { Image, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';

function GamesGrid() {
  const { games, error } = useGames();

  return (
    <div>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            <div>
              <Image width={'160px'} src={game.background_image} />
            </div>
            <div>{game.name}</div>
            <div>rating: {game.rating}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GamesGrid;
