import { Text, Flex, Image, Box } from '@chakra-ui/react'
import Container from '../../components/Grid/Container'
import Col from '../../components/Grid/Grid'
import Link from 'next/link'

const Topbar = () => {
    return (
        <Container minH='127px'>
            <Col colStart={2} colEnd={26}>
                <Flex alignItems='flex-end' justifyContent='space-between'>
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
            </Col>
        </Container>
    )
}

export default Topbar