import {
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Box,
  Button,
  Heading,
} from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import cropImage from '../services/cropImage';

interface Props {
  setGenre: (g: Genre) => void;
  selectedGenre: Genre | null;
}

function GenresList({ setGenre, selectedGenre }: Props) {
  const { data, isLoading, error } = useGenres();

  return (
    <>
      <Heading as="h2" fontSize="2xl" marginY={3}>
        Genres
      </Heading>
      {isLoading && (
        <Box marginTop={16} textAlign={'center'}>
          <Spinner size={'xl'} />
        </Box>
      )}
      <List>
        {error && <p>{error}</p>}
        {data.map((genre) => (
          <ListItem paddingY="5px" key={genre.id}>
            <HStack>
              <Image
                objectFit="cover"
                boxSize={'32px'}
                borderRadius={8}
                src={cropImage(genre.image_background)}
              />
              <Button
                variant="link"
                whiteSpace="normal"
                textAlign="start"
                fontWeight={genre.id === selectedGenre?.id ? 'black' : 'normal'}
                onClick={() => setGenre(genre)}>
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenresList;
