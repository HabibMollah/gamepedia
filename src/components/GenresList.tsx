import {
  Text,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Box,
} from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import cropImage from '../services/cropImage';

interface Props {
  setGenre: (g: string) => void;
}

function GenresList({ setGenre }: Props) {
  const { data, isLoading, error } = useGenres();

  return (
    <>
      {isLoading && (
        <Box marginTop={16} textAlign={'center'}>
          <Spinner size={'xl'} />
        </Box>
      )}
      <List>
        {error && <p>{error}</p>}
        {data.map((genre) => (
          <ListItem
            paddingY="5px"
            key={genre.id}
            onClick={() => setGenre(genre.slug)}>
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
    </>
  );
}

export default GenresList;
