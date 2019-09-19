import React, {Fragment} from 'react';
import { CarouselImage } from 'react-rainbow-components';
import {CarouselCard} from 'react-rainbow-components';

const Banner = () => {

    const images = [];

    for(let i = 1; i < 5; i++) {
        images.push(<CarouselImage src={`/img/fashion${i}.jpg`} className={'banner-img'} key={i}/>)
    }
    return(
        <Fragment>
            <CarouselCard 
                className={'banner-container'}
                scrollDuration={3}
            >   
            {images}
            </CarouselCard>
        </Fragment>
    )
}

export default Banner;