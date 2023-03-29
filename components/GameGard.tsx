import { Card, CardBody, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import { Game } from '../hooks/useGames'

interface Props {
  game: Game
}

function GameGard({ game }: Props) {
  return (
    <Card borderRadius={9} overflow="hidden">
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  )
}
export default GameGard
