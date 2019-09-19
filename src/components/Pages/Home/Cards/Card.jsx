import React from 'react';

const Card = (props) => {
    return (
        <div className={`single-card-${props.type}`}>
            <div>
                {props.type}
            </div>
        </div>
    )
}

export default Card;