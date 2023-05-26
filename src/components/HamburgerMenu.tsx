import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  IconButton,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { SlMenu } from 'react-icons/sl';
import { GrClose } from 'react-icons/gr';
import cropImage from '../services/cropImage';
import useGenres, { Genre } from '../hooks/useGenres';

interface Props {
  setGenre: (g: Genre) => void;
  selectedGenre: Genre | null;
}

function HamburgerMenu({ setGenre, selectedGenre }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data, isLoading, error } = useGenres();

  return (
    <Box>
      <IconButton
        aria-label="Hamburger Menu"
        icon={<SlMenu />}
        onClick={onOpen}
      />

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        {/* <DrawerOverlay> */}
        <DrawerContent>
          <DrawerHeader fontSize="4xl">
            Genres
            <IconButton
              aria-label="Close"
              onClick={onClose}
              icon={<GrClose />}
              variant="outline"
              marginLeft={24}
            />
          </DrawerHeader>
          <DrawerBody>
            <Box textAlign="center">
              {isLoading ? (
                <Spinner size="xl" />
              ) : error ? (
                <Text color="red">Genre list error with message: {error}</Text>
              ) : (
                <List>
                  {data.map((genre) => (
                    <ListItem paddingY="5px" key={genre.id}>
                      <HStack>
                        <Image
                          objectFit="cover"
                          boxSize="32px"
                          borderRadius={8}
                          src={cropImage(genre.image_background)}
                        />
                        <Button
                          variant="link"
                          whiteSpace="normal"
                          textAlign="start"
                          fontWeight={
                            genre.id === selectedGenre?.id ? 'black' : 'normal'
                          }
                          onClick={() => setGenre(genre)}>
                          {genre.name}
                        </Button>
                      </HStack>
                    </ListItem>
                  ))}
                </List>
              )}
            </Box>
          </DrawerBody>
        </DrawerContent>
        {/* </DrawerOverlay> */}
      </Drawer>
    </Box>
  );
}

export default HamburgerMenu;
