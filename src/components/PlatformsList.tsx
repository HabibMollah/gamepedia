import { HStack, Icon } from '@chakra-ui/react';
import { Platform } from '../hooks/useGames';
import {
  SiWindows,
  SiLinux,
  SiApple,
  SiIos,
  SiAndroid,
  SiPlaystation,
  SiXbox,
  SiNintendo,
  SiAtari,
  SiCommodore,
  SiSega,
} from 'react-icons/si';
import { BsGlobe2 } from 'react-icons/bs';
import { IconType } from 'react-icons';
interface Props {
  platforms: Platform[];
}
function PlatformsList({ platforms }: Props) {
  const iconsMap: { [key: string]: IconType } = {
    pc: SiWindows,
    linux: SiLinux,
    mac: SiApple,
    playstation: SiPlaystation,
    xbox: SiXbox,
    nintendo: SiNintendo,
    android: SiAndroid,
    ios: SiIos,
    web: BsGlobe2,
    atari: SiAtari,
    sega: SiSega,
    'commodore-amiga': SiCommodore,
  };
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon
          key={platform.id}
          color={'gray.500'}
          as={iconsMap[platform.slug]}
        />
      ))}
    </HStack>
  );
}

export default PlatformsList;
