import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';

interface Props {
  gameQuery: GameQuery;
}
function MainHeading({ gameQuery }: Props) {
  const genre = gameQuery.genre?.name;
  const platform = gameQuery.platform?.name;
  const searchText = gameQuery.searchText;
  const heading = `${genre || ''} Games ${platform ? 'on' : ''} ${
    platform || ''
  } ${searchText ? 'named "' + searchText + '"' : ''}`;

  return (
    <Heading marginY={5} fontSize="5xl" as="h1">
      {heading}
    </Heading>
  );
}

export default MainHeading;
