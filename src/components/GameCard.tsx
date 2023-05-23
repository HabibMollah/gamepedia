import { Card, CardBody, Heading, Image } from '@chakra-ui/react';
import { Game, Platform } from '../hooks/useGames';
import PlatformsList from './PlatformsList';

interface Props {
  game: Game;
  platforms: { platform: Platform }[];
}

function GameCard({ game, platforms }: Props) {
  return (
    <Card overflow={'hidden'} borderRadius={20}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize={'2xl'}>{game.name}</Heading>

        <PlatformsList
          platforms={platforms.map((platformObj) => platformObj.platform)}
        />
      </CardBody>
    </Card>
  );
}

export default GameCard;
