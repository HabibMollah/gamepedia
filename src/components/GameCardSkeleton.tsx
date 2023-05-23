import { Card, Skeleton, SkeletonText } from '@chakra-ui/react';

function GameCardSkeleton() {
  return (
    <Card width={'300px'}>
      <Skeleton height={'250px'} overflow={'hidden'} borderRadius={'10px'} />
      <SkeletonText padding={4} />
    </Card>
  );
}

export default GameCardSkeleton;
