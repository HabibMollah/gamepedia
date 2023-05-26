import { HStack, Hide, Image, Show } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import DarkModeSwitch from './DarkModeSwitch';
import SearchBar from './SearchBar';
import HamburgerMenu from './HamburgerMenu';
import { Genre } from '../hooks/useGenres';

interface Props {
  onSearch: (searchText: string) => void;
  setGenre: (g: Genre) => void;
  selectedGenre: Genre | null;
}

function NavBar({ onSearch, setGenre, selectedGenre }: Props) {
  return (
    <HStack padding={'10px'}>
      <Hide above="lg">
        <HamburgerMenu setGenre={setGenre} selectedGenre={selectedGenre} />
      </Hide>
      <Image
        src={logo}
        alt="GamePedia logo"
        boxSize="50px"
        borderRadius={100}
      />
      <SearchBar onSearch={onSearch} />
      <DarkModeSwitch />
    </HStack>
  );
}

export default NavBar;
