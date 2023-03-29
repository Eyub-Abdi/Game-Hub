import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameGard from './GameGard'

function GameGrid() {
  const { games, error } = useGames()
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={10} padding="8">
        {games?.map(game => (
          <GameGard key={game.id} game={game}></GameGard>
        ))}
      </SimpleGrid>
    </>
  )
}

export default GameGrid
