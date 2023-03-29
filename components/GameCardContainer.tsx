import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

function GameCardContainer({ children }: Props) {
  return (
    <Box width="300px" borderRadius={9} overflow="hidden">
      {children}
    </Box>
  )
}

export default GameCardContainer
