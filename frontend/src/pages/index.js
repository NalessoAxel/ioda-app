import { useRef } from 'react';
import { Box, Flex, Image, GridItem, Text, Grid } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

import { API_URL } from '../components/Utils/urls';
import Menu from '../components/Content/Menu';
import Home from '../components/Content/Home';
import Contact from '../components/Content/Contact';
import Reservations from '../components/Content/Reservations';
import About from '../components/Content/About';

import PushScrollGlobal from '../helpers/globalscroll'

const Index = ({images}) => {
	const router = useRouter();
	const containerRef = useRef(null);
	
	return (
		<>
			<Head>
				<title>Ioda Restaurant</title>
			</Head>
			
			<LocomotiveScrollProvider
				options={{ smooth: true, direction: 'horizontal' }}
				containerRef={containerRef}
				watch={[]}
			>	
				<PushScrollGlobal />

				<div data-scroll-container ref={containerRef} id="scroll-container" className="test test2 test3">
					<div data-scroll-section>
						<Grid gridTemplateColumns="repeat(5, 1fr)" position='relative' alignItems='center'>
							<Home images={images} />	

							<Menu />

							<About />

							<Reservations />

							<Contact />
						</Grid>
					</div>
				</div>
			
			</LocomotiveScrollProvider>
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