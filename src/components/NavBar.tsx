import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import DarkModeSwitch from './DarkModeSwitch';
function NavBar() {
  return (
    <HStack justifyContent={'space-between'} padding={'10px'}>
      <Image
        src={logo}
        alt="GamePedia logo"
        boxSize="50px"
        borderRadius={100}
      />
      <DarkModeSwitch />
    </HStack>
  );
}

export default NavBar;
