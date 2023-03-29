import { HStack, Icon } from '@chakra-ui/react'
// ICONS
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'
import { Platform } from '../hooks/useGames'
import { IconType } from 'react-icons/lib/esm/iconBase'

interface Props {
  platforms: Platform[]
}

function PlatformIconList({ platforms }: Props) {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    android: FaAndroid,
    mac: FaApple,
    ios: MdPhoneIphone,
    linux: FaLinux,
    web: BsGlobe
  }
  return (
    <HStack marginY={2}>
      {platforms.map(platform => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  )
}

export default PlatformIconList
