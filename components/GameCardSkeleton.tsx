import { Card, CardBody, Heading, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

function GameCardSkeleton() {
  return (
    <Card>
      <Skeleton height="200px" />
      <CardBody>
        <Heading>
          <SkeletonText />
        </Heading>
      </CardBody>
    </Card>
  )
}

export default GameCardSkeleton
