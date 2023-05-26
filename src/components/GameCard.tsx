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
    <Card>
      <Image src={cropImage(game.background_image)} />
      <CardBody>
        <HStack marginBottom={3} justify={'space-between'}>
          <PlatformsList
            platforms={platforms.map((platformObj) => platformObj.platform)}
          />
          <MetaCriticScore metacritic={metacritic} />
        </HStack>
        <Heading as="h3" fontSize="2xl">
          {game.name}
        </Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
