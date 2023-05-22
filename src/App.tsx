import { Grid, GridItem, Show } from '@chakra-ui/react';

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
          Nav
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
