import {
  Text,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms from '../hooks/usePlatforms';
import { Platform } from '../hooks/useGames';

interface Props {
  selectedPlatform: Platform | null;
  setSelectedPlatform: (platform: Platform) => void;
}

function PlatformSelector({ selectedPlatform, setSelectedPlatform }: Props) {
  const { data, error } = usePlatforms();

  if (error) return <Text>Platform error with message: {error}</Text>;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform ? `Platform: ${selectedPlatform.name}` : 'Platform'}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            onClick={() => {
              setSelectedPlatform(platform);
            }}
            key={platform.id}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector;
