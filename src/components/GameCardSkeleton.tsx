import { Card, Skeleton, SkeletonText } from '@chakra-ui/react';

function GameCardSkeleton() {
  return (
    <Card width={'300px'}>
      <Skeleton height={'200px'} overflow={'hidden'} borderRadius={20}>
        <SkeletonText />
      </Skeleton>
    </Card>
  );
}

export default GameCardSkeleton;
