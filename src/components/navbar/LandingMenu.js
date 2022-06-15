import {HamburgerIcon} from '@chakra-ui/icons'
import {
    IconButton,
    Menu,
    MenuButton,
    MenuList
} from '@chakra-ui/react'
import { MenuItem } from 'tw-components'

export const LandingMenu = (props) => {
    return (
        <Menu>
          <MenuButton
            {...props}
            as={IconButton}
            aria-label="Menu"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList bgColor="black" color="white">
            <MenuItem
              href="#developers"
              category="mobile-menu"
              label="developers"
            >
              Developers
            </MenuItem>
            <MenuItem
              href="#features"
              category="mobile-menu"
              label="fees"
            >
              Features
            </MenuItem>
            <MenuItem
              href="#fees"
              category="mobile-menu"
              label="fees"
            >
              Pricing
            </MenuItem>
    
            <MenuItem
              href="https://portal.thirdweb.com"
              category="mobile-menu"
              label="portal"
            >
              Docs
            </MenuItem>
          </MenuList>
        </Menu>
      );
}