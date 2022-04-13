import { useRef, useContext } from 'react';
import { Box, Flex, Image,Grid, GridItem, Text, List, ListItem } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';

import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

import { API_URL } from '../components/Utils/urls';
import Menu from '../components/Content/Menu';
import Home from '../components/Content/Home';
import Contact from '../components/Content/Contact';
import Reservations from '../components/Content/Reservations';
import About from '../components/Content/About';

import Container from '../components/Grid/Container';
import Col from '../components/Grid/Grid';

import { NavLinks } from '../components/Utils/navLink';

import PushScrollGlobal from '../helpers/globalScroll'
import BottomBar from '../components/Menu/BottomBar';
import { SmoothScrollContext } from '../contexts/SmoothScrollContext';

const Index = ({images}) => {
	const router = useRouter();
	const containerRef = useRef(null);
	const linkRef = useRef(null);
	const { scroll } = useContext(SmoothScrollContext);

	const goToHome = event => {
		event.preventDefault()
		scroll && scroll.scrollTo('#home')
	}
	const goToMenu = event => {
		event.preventDefault()
		scroll && scroll.scrollTo('#menu')
	}

	const goToReservations = event => {
		event.preventDefault()
		scroll && scroll.scrollTo('#reservations')
	}

	const goToAbout = event => {
		event.preventDefault()
		scroll && scroll.scrollTo('#about')
	}

	const goToContact = event => {
		event.preventDefault()
		scroll && scroll.scrollTo('#contact')
	}
	
	return (
		<>
			<Head>
				<title>Ioda Restaurant</title>
			</Head>				
					<div data-scroll-section>
						<Flex maxW={['100vw', null, null, '400vw']} minHeight='calc(100vh - 127px - 62px)' position='relative' alignItems='center' flexDirection={['column', null, null, 'row']} >

						<Container id='home' minHeight='calc(100vh - 127px - 62px)'>
							<Col colStart={1} colEnd={27} minWidth='100vw' minHeight='81vh'>
								<Grid gridTemplateColumns='repeat(3, 1fr)'  minHeight='calc(100vh - 127px - 62px)'>
									{images.data[0].attributes.banner.data.map((image, index) => (
										<GridItem w='100%'  key={index}>
											<Image src={API_URL + image.attributes.url} alt={image.attributes.name} minW='100%'  objectFit='cover' objectPosition='center' />
										</GridItem>
										))}
								</Grid>  
							</Col>
						</Container>

							<Container id='menu'>
								<Flex minWidth='100vw' minH='100vh' bgColor='blue' alignItems='center' justifyContent='center'>
								<Text>Menu</Text>
								</Flex>
							</Container>

							<Container id='reservations'>
								<Flex minWidth='100vw' minH='100vh' bgColor='red'>
									<Text>Reservations</Text>
									</Flex>
							</Container>

							<Container id='about'>
								<Flex minWidth='100vw' minH='100vh' bgColor='orange'>
									<Text>About</Text>
								</Flex>
							</Container>

							<Container id='contact'>
									<Flex minWidth='100vw' minH='100vh' bgColor='grey'>
										<Text>Contact</Text>
									</Flex>
							</Container>
						</Flex>
					
				

			</div>
				<Container height='62px' bgColor='#778F74'  w='100%' zIndex="2" position='fixed' bottom='0'>
					<Col colStart={2} colEnd={26}>
							<Flex as={List} flexDirection='row' alignItems='center' height='100%'>
								<ListItem>
									<Text textStyle='sm' pr={2} as='a' color='white' href='#home' textDecoration='underline' onClick={goToHome}>HOME</Text>

									<Text textStyle='sm'  pr={2} as='a' color='white' href='#menu' onClick={goToMenu}>MENU</Text>

									<Text textStyle='sm'  pr={2} as='a' color='white' href='#reservation' onClick={goToReservations}>RESERVATIONS</Text>

									<Text textStyle='sm'  pr={2} as='a' color='white' href='#reservation' onClick={goToAbout}>ABOUT</Text>

									<Text textStyle='sm'  pr={2} as='a' color='white' href='#reservation' onClick={goToContact}>CONTACT</Text>
								</ListItem>
							</Flex>
					</Col>
				</Container>
		</>
	);
};

export default Index;

export async function getStaticProps() {
	const images_res = await fetch(`${API_URL}/api/home-images?populate=*`);
	const images = await images_res.json();
	
	return {
		props: {
			images
		},
	};
}