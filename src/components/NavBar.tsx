import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import DarkModeSwitch from './DarkModeSwitch';
import SearchBar from './SearchBar';
function NavBar() {
  return (
    <HStack padding={'10px'}>
      <Image
        src={logo}
        alt="GamePedia logo"
        boxSize="50px"
        borderRadius={100}
      />
      <SearchBar />
      <DarkModeSwitch />
    </HStack>
  );
}

export default NavBar;
