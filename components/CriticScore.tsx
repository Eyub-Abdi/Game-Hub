import { Badge } from '@chakra-ui/react'

interface Props {
  score: number
}

function CriticScore({ score }: Props) {
  let color = score > 75 ? 'green' : score > 60 ? 'yellow' : 'red'
  return (
    <Badge colorScheme={color} paddingX={2} fontSize="16px" borderRadius={4}>
      {score}
    </Badge>
  )
}

export default CriticScore
