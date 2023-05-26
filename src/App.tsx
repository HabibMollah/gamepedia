import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GamesGrid from './components/GamesGrid';
import GenresList from './components/GenresList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/useGames';

interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav"
                  "main"`,
          lg: `"nav nav" "sidebar main"`,
        }}
        templateColumns={{
          base: '1fr',
          lg: '200px 1fr',
        }}>
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem paddingX="5px" area="sidebar">
            <GenresList
              selectedGenre={gameQuery.genre}
              setGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            setSelectedPlatform={(platform: Platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <GamesGrid
            selectedGenre={gameQuery.genre}
            selectedPlatform={gameQuery.platform}
          />
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
