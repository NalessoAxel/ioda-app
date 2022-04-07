import { Text, Flex, Image, Box } from '@chakra-ui/react'
import Container from '../../components/Grid/Container'
import Col from '../../components/Grid/Grid'
import Link from 'next/link'

const Topbar = () => {
    return (
        <Container minH='127px'>
            <Flex alignItems='flex-end' justifyContent='space-between' position='fixed' w='100%' px='50px' pt='20px'>
                <Flex>
                    <Link passHref href='/'>
                        <Image src='/logo.svg' alt='logo' w='100%' h='89px' objectFit='cover' objectPosition='center' />
                    </Link>
                </Flex>
                        
                <Flex  justifyContent='flex-end' h='100%'>
                    <Text textStyle='body' mr={2}>FR</Text>
                    <Text textStyle='body'>EN</Text>      
                </Flex>           
            </Flex>
        </Container>
    )
}

export default Topbar