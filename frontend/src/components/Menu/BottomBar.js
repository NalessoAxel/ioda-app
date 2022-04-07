import { Text, Flex, List, ListItem } from '@chakra-ui/react'
import Container from '../../components/Grid/Container'
import Col from '../../components/Grid/Grid'
import Link from 'next/link'
import { useRouter } from 'next/router'

const BottomBar = () => {
    const router = useRouter();

    const links = [
        { slug: 'menu', title: 'Menu' },
        { slug: 'reservations', title: 'Reservations' },
        { slug: 'apropos', title: 'A Propos' },
        { slug: 'contact', title: 'Contact' },
    ]

    const strToUrl = (str) => `/${str.replace(' ', '')}`;

    const MenuItem = ({ children, isLast, to = '/' }) => {
        return(
        <Link passHref href={to}>
            <Text position='relative' as='a' textStyle='body'  textDecoration='none' color='#fff' textTransform='uppercase' px={2} py={1}>
                {children}
            </Text>
        </Link>
        )
    }
        
    return (
        <Container minH='62px' bgColor='#778F74'  w='100%' position='fixed'>
            <Col colStart={2} colEnd={26} >
                <Flex as={List} display={['none', null, null, 'flex']} h="100%" justifyContent="flex-start" listStyleType="none" width="100%" m="0px">
                    {links.map((link) => (
                        <Flex key={`itterationMenu${links.indexOf(link)}`} as={ListItem} role="group" h="100%" pr={8} alignItems="center">
                            <MenuItem passHref to={strToUrl(link.slug)}>
                                {link.title}

                                {router.route === `/${link.slug}` && (
                                    <MotionBox layoutId="underlineTopbar" width="100%" height="2px" position="absolute" bottom="0" left="0" />
                                )}
                            </MenuItem>
                        </Flex>
                    ))}
							
				</Flex>
            </Col>
        </Container>
    )
}

export default BottomBar