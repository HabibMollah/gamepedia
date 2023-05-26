import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import DarkModeSwitch from './DarkModeSwitch';
import SearchBar, { SearchBarProps } from './SearchBar';

function NavBar({ onSearch }: SearchBarProps) {
  return (
    <HStack padding={'10px'}>
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
