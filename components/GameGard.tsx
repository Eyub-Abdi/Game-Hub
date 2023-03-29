import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Game } from '../hooks/useGames'
import PlatformIconList from './PlatformIconList'

interface Props {
  game: Game
}

function GameGard({ game }: Props) {
  return (
    <Card borderRadius={9} overflow="hidden">
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
      </CardBody>
    </Card>
  )
}
export default GameGard
