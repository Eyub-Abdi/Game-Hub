import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCardContainer from './GameCardContainer'
import GameCardSkeleton from './GameCardSkeleton'
import GameGard from './GameGard'

function GameGrid() {
  const { games, error, isLoading } = useGames()
  const skeletons = [1, 2, 3, 4, 5, 6]
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={10} padding="8">
        {isLoading &&
          skeletons.map(skeleton => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton key={skeleton} />
            </GameCardContainer>
          ))}
        {games?.map(game => (
          <GameCardContainer key={game.id}>
            <GameGard game={game}></GameGard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  )
}

export default GameGrid
