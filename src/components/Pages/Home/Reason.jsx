import React from 'react';
import Cards from './Cards/Cards';

const config = () => {
    return [
        {
            type: 'normal'
        },
        {
            type: 'normal'
        },
        {
            type: 'normal'
        }
    ]
};


const Reason = () => {
    return (
        <Cards config={config()}/>
    )
}
export default Reason;