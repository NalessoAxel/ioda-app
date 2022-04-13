import { useRef, useEffect, useContext } from "react";
import { ChakraProvider } from '@chakra-ui/react';
import App from 'next/app';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { DefaultSeo } from 'next-seo'
import SEO from '../helpers/seo.config'

import BottomBar from '../components/Menu/BottomBar';
import Topbar from '../components/Menu/Topbar';
import theme from '../components/Theme/index';

import 'locomotive-scroll/dist/locomotive-scroll.css';
import { AppWrapper } from '../contexts/state';
import '../../style.css'
import { SmoothScrollProvider } from "../contexts/SmoothScrollContext";


const MyApp = ({ Component, pageProps }) => {
	const containerRef = useRef(null)

	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
				<link rel="shortcut icon" href="/favicon.ico" />
			</Head>

			<ChakraProvider theme={theme}>
				<style jsx global>{`
					@font-face {
						font-family: 'Merryweather';
						src: url('/fonts/Merriweather-Regular.ttf') format('truetype');
						font-weight: 400;
						font-style: normal;
						font-display: swap;
					}

					@font-face {
						font-family: 'Merryweather';
						src: url('/fonts/Merriweather-Black.ttf') format('truetype');
						font-weight: 400;
						font-style: normal;
						font-display: swap;
					}

					@font-face {
						font-family: 'Merryweather';
						src: url('/fonts/Merriweather-Bold.ttf') format('truetype');
						font-weight: 600;
						font-style: normal;
						font-display: swap;
					}

					@font-face {
						font-family: 'Merryweather';
						src: url('/fonts/Merriweather-LightItalic.ttf') format('truetype');
						font-weight: 400;
						font-style: normal;
						font-display: swap;
					}
				`}</style>

				<DefaultSeo {...SEO} />

				<Topbar />
				<SmoothScrollProvider containerRef={containerRef}>
						<main data-scroll-container>
								<Component  {...pageProps} />
						</main>	
				</SmoothScrollProvider>
				
			</ChakraProvider>
		</>
	);
};

MyApp.getInitialProps = async (context) => {
	const pageProps = await App.getInitialProps(context);

	return { ...pageProps };
};

MyApp.propTypes = {
	Component: PropTypes.func.isRequired,
	pageProps: PropTypes.object.isRequired,
};

export default MyApp;
