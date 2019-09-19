import React from 'react';
import Card from './Card';


const Cards = (props) => {
    return(
        <div className="cards-container">
            <div className="cards">
                {props.config.map((el, idx) => {
                    return(
                        <Card type={el.type} key={idx}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Cards;