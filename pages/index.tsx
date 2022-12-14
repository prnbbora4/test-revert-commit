import React from 'react'
import {
  Drawer,
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton
} from '@chakra-ui/react'

import { HamburgerIcon } from '@chakra-ui/icons'

const Index = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState<any>('left')

  return (
    <div>
      {/* <Button colorScheme='blue' onClick={onOpen}>
        Open
      </Button> */}


      <div style={{ width: "100%", border: "1px solid red", display: "flex" }}>

        <div style={{ width: "10%", }}>
          <HamburgerIcon w={8} h={8} color="blue.500" onClick={onOpen} />
        </div>
        <div style={{ width: "800px", border: "1px solid blue", display: "flex" }}></div>

      </div>



      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px'>Menu</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default Index