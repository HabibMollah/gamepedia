import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
function NavBar() {
  return (
    <HStack>
      <Image
        src={logo}
        alt="GamePedia logo"
        boxSize="60px"
        borderRadius={100}
      />
      <Text>NavBar</Text>
    </HStack>
  );
}

export default NavBar;
