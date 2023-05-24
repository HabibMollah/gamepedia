import { HStack, Switch, useColorMode, Text, Icon } from '@chakra-ui/react';
import { FiMoon, FiSun } from 'react-icons/fi';

function DarkModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Icon as={FiSun} />
      <Switch
        colorScheme="orange"
        onChange={toggleColorMode}
        isChecked={colorMode === 'dark'}
      />
      <Icon as={FiMoon} />
    </HStack>
  );
}

export default DarkModeSwitch;
