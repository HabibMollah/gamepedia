import { HStack, Switch, useColorMode, Text } from '@chakra-ui/react';

function DarkModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
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
  );
}

export default DarkModeSwitch;
