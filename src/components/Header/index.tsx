import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'
import { Logo } from '../Header/Logo'
import { NotificationsNav } from '../Header/NotificationNav'
import { Profile } from '../Header/Profile'
import { SearchBox } from '../Header/SearchBox'

export function Header() {
  const { onOpen } = useSidebarDrawer()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Flex w="100%" as="header" maxWidth={1480} h="20" mx="auto" mt="4" align="center" px="6">
      {!isWideVersion && (
        <IconButton
          aria-label="Open Navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        ></IconButton>
      )}
      <Logo />
      {isWideVersion && <SearchBox />}
      <NotificationsNav />
      <Profile showProfileData={isWideVersion} />
    </Flex>
  )
}
