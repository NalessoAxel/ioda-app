import { useContext, useRef } from 'react';
import { Text, Flex, List, ListItem } from '@chakra-ui/react'
import Container from '../../components/Grid/Container'
import Col from '../../components/Grid/Grid'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { SmoothScrollContext } from '../../helpers/globalScroll'
import { NavLinks } from '../Utils/navLink';

const BottomBar = () => {
    const router = useRouter();
    const { scroll } = useContext(SmoothScrollContext)
    const linkRef = useRef(null)

    const goTo = (path) => {
        scroll && scroll.scrollTo(linkRef.current)
        router.push(path)
    }

        
    return (
        <Container minH='62px' bgColor='#778F74'  w='100%' zIndex="2">
            <Col colStart={2} colEnd={26}>
                <nav>
                    <Flex as={List} flexDirection='row'>
                    {NavLinks.map((link, index) => (
                            <ListItem key={index}>
                                <Link href={link.path}>
                                    <a ref={linkRef} onClick={goTo}>
                                        <Text fontSize='sm' color='#fff' fontWeight='bold'>{link.name}</Text>
                                    </a>
                                </Link>
                            </ListItem>
                    ))}
                    </Flex>
                </nav>            
            </Col>
        </Container>
    )
}

export default BottomBar