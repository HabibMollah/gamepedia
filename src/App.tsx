import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav"
                  "main"`,
          lg: `"nav nav" "sidebar main"`,
        }}>
        <GridItem bg={'coral'} area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem bg={'brown'} area="sidebar">
            sidebar
          </GridItem>
        </Show>
        <GridItem bg={'green'} area="main">
          main
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
