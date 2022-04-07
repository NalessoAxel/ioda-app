import { Text, Flex } from '@chakra-ui/react'
import React from 'react'
import Container from '../Grid/Container'

const Menu = () => {
  return (
    <Container data-scroll-section>
        <Flex minWidth='100vw' minH='calc(100vh - 127px - 62px)' bgColor='blue'>
          <Text>Menu</Text>
        </Flex>
    </Container>
  )
}

export default Menu