import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';
import { Game, Platform } from '../hooks/useGames';
import PlatformsList from './PlatformsList';
import MetaCriticScore from './MetaCriticScore';
import cropImage from '../services/cropImage';

interface Props {
  game: Game;
  platforms: { platform: Platform }[];
  metacritic: number;
}

function GameCard({ game, platforms, metacritic }: Props) {
  return (
    <Card width={'300px'} overflow={'hidden'} borderRadius={10}>
      <Image src={cropImage(game.background_image)} />
      <CardBody>
        <Heading fontSize={'2xl'}>{game.name}</Heading>
        <HStack justify={'space-between'}>
          <PlatformsList
            platforms={platforms.map((platformObj) => platformObj.platform)}
          />
          <MetaCriticScore metacritic={metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
}

export default GameCard;
