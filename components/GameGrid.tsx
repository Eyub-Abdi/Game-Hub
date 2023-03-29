import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCardSkeleton from './GameCardSkeleton'
import GameGard from './GameGard'

function GameGrid() {
  const { games, error, isLoading } = useGames()
  const skeletons = [1, 2, 3, 4, 5, 6]
  // if (isLoading) return <GameCardSkeleton />
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={10} padding="8">
        {isLoading && skeletons.map(skeleton => <GameCardSkeleton key={skeleton} />)}
        {games?.map(game => (
          <GameGard key={game.id} game={game}></GameGard>
        ))}
      </SimpleGrid>
    </>
  )
}

export default GameGrid
