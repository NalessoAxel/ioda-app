import { Text, Flex } from '@chakra-ui/react'
import React from 'react'
import Container from '../Grid/Container'

const Reservations = () => {
    return (
        <Container>
        <Flex minWidth='100vw' minH='calc(100vh - 127px - 62px)' bgColor='red'>
            <Text>Reservations</Text>
            </Flex>
        </Container>
    )
}

export default Reservations