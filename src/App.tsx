import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GamesGrid from './components/GamesGrid';
import GenresList from './components/GenresList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

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
              selectedGenre={selectedGenre}
              setGenre={(genre) => setSelectedGenre(genre)}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <PlatformSelector />
          <GamesGrid selectedGenre={selectedGenre} />
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
