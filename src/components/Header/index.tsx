import { Flex } from '@chakra-ui/react'
import { Logo } from '../Header/Logo'
import { NotificationsNav } from '../Header/NotificationNav'
import { Profile } from '../Header/Profile'
import { SearchBox } from '../Header/SearchBox'

export function Header() {
  return (
    <Flex w="100%" as="header" maxWidth={1480} h="20" mx="auto" mt="4" align="center" px="6">
      <Logo />
      <SearchBox />
      <NotificationsNav />
      <Profile />
    </Flex>
  )
}
