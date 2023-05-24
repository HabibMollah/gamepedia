import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GamesGrid from './components/GamesGrid';
import GenresList from './components/GenresList';

function App() {
  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav"
                  "main"`,
          lg: `"nav nav" "sidebar main"`,
        }}>
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="sidebar">
            <GenresList />
          </GridItem>
        </Show>
        <GridItem area="main">
          <GamesGrid />
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
