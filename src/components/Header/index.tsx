import { Flex, Icon, IconButton, useBreakpointValue} from "@chakra-ui/react"
import { RiMenuLine } from "react-icons/ri"

import { useSidebarDrawer } from "../../context/SidebarDrawer"

import { Logo } from "./Logo"
import { NotificationNav } from "./NotificationsNav"
import { Profile } from "./Profile"
import { SearchBox } from "./SearchBox"

export function Header(){
  const isWideVersoin = useBreakpointValue({
      base: false,
      lg: true,   
  })

  const { onOpen } = useSidebarDrawer()

    return(
        <Flex
        as='header'
          w='100%'
          maxWidth={1480}
          h='20'
          mx='auto'
          mt='4'
          px='6'
          align='center'
          >
            {!isWideVersoin && (
              <IconButton
                aria-label="Open Navigation"
                icon={<Icon as={RiMenuLine} />}
                fontSize="24"
                variant='unstyled'
                onClick={onOpen}
                mr="2"
              >

              </IconButton>
            )}

            <Logo />

          { isWideVersoin && <SearchBox /> }
              
            <Flex aling="center" ml="auto">
               
              <NotificationNav />
              <Profile showProfileData={isWideVersoin} />

            </Flex>
        </Flex>
    )
}