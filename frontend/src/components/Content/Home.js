import { Grid, Flex, Image, GridItem } from '@chakra-ui/react';
import Container from '../Grid/Container';

import { API_URL } from '../Utils/urls';


const HomeHeader = ({images}) => {
    return (
        <div>
            <Flex  minWidth='100vw' minHeight='calc(100vh - 127px - 62px)'>
                        <Grid gridTemplateColumns="repeat(3, 1fr)"  minWidth='100vw' minHeight='calc(100vh - 127px - 62px)' >
                            {images.data[0].attributes.banner.data.map((image, index) => (
                                <GridItem w='100%'  key={index}>
                                    <Image src={API_URL + image.attributes.url} alt={image.attributes.name}  minH='100%' objectFit='cover' objectPosition='center' />
                                </GridItem>
                                ))}
                        </Grid>  
                </Flex>
        </div>
    )
}

export default HomeHeader