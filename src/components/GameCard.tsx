import { Card, CardBody, Heading, Image } from '@chakra-ui/react';
import { Game, Platform } from '../hooks/useGames';
import PlatformsList from './PlatformsList';
import MetaCriticScore from './MetaCriticScore';

interface Props {
  game: Game;
  platforms: { platform: Platform }[];
  metacritic: number;
}

function GameCard({ game, platforms, metacritic }: Props) {
  return (
    <Card overflow={'hidden'} borderRadius={20}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize={'2xl'}>{game.name}</Heading>

        <PlatformsList
          platforms={platforms.map((platformObj) => platformObj.platform)}
        />
      </CardBody>
      <MetaCriticScore metacritic={metacritic} />
    </Card>
  );
}

export default GameCard;
