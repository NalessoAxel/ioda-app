import { Text, Flex } from '@chakra-ui/react'
import React from 'react'
import Container from '../Grid/Container'

const Contact = () => {
    return (
        <Container id='contact'>
        <Flex minWidth='100vw' minH='calc(100vh - 127px - 62px)' bgColor='grey'>
            <Text>Contact</Text>
            </Flex>
        </Container>
    )
}

export default Contact