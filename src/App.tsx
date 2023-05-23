import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GamesGrid from './components/GamesGrid';

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
          <GridItem bg={'brown'} area="sidebar">
            sidebar
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
