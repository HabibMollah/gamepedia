import { useEffect, useState } from 'react';
import apiClient from '../../services/api-client';
import { Image, Text } from '@chakra-ui/react';

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

interface Game {
  id: number;
  name: string;
  background_image: string;
  rating: number;
}

function GamesGrid() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>('/games')
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  }, []);

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
