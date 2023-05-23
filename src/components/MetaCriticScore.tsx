import { Badge } from '@chakra-ui/react';

interface Props {
  metacritic: number;
}
function MetaCriticScore({ metacritic }: Props) {
  const color =
    metacritic >= 90
      ? 'green'
      : metacritic >= 80
      ? 'yellow'
      : metacritic > 70
      ? 'orange'
      : 'red';

  return (
    <Badge
      colorScheme={color}
      fontSize={'16px'}
      paddingX={2}
      borderRadius={'8px'}>
      {metacritic}
    </Badge>
  );
}

export default MetaCriticScore;
