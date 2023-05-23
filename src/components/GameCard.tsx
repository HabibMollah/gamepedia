import { Card, CardBody, Heading, Image } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card overflow={'hidden'} borderRadius={20}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading>{game.name}</Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
