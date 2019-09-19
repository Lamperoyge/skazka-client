import React from 'react';
import Cards from './Cards/Cards';

const config = () => {
    return [
        {
            type: 'normal'
        },
        {
            type: 'big'
        },
        {
            type: 'normal'
        }
    ]
};

const WhatWeDo = () => {
    return (
        <Cards config={config()}/>
    )
}
export default WhatWeDo;