import { Text, HStack, Image, List, ListItem, Spinner } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import cropImage from '../services/cropImage';

function GenresList() {
  const { data, isLoading, error } = useGenres();
  return (
    <List>
      {isLoading && <Spinner />}
      {error && <p>{error}</p>}
      {data.map((genre) => (
        <ListItem paddingY="5px" key={genre.id}>
          <HStack>
            <Image
              boxSize={'32px'}
              borderRadius={8}
              src={cropImage(genre.image_background)}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenresList;
