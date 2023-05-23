import { HStack, Image, Switch, Text, useColorMode } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack justifyContent={'space-between'} padding={'16px'}>
      <Image
        src={logo}
        alt="GamePedia logo"
        boxSize="60px"
        borderRadius={100}
      />
      <HStack>
        <Text>☀️</Text>
        <Switch
          colorScheme="orange"
          onChange={toggleColorMode}
          isChecked={colorMode === 'dark'}
          size={'lg'}
        />
        <Text>🌙</Text>
      </HStack>
    </HStack>
  );
}

export default NavBar;
