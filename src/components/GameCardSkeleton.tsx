import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';

function GameCardSkeleton() {
  return (
    <Card width={'300px'}>
      <Skeleton height={'250px'} overflow={'hidden'} borderRadius={10} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
}

export default GameCardSkeleton;
