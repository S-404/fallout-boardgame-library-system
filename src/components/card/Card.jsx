import React from 'react';
import './card.scss'
const Card = ({card,cardMenu}) => {
    return (
        <div className='card'>
            <div>{cardMenu}</div>
            <span>{card.num}</span>
        </div>
    );
};

export default Card;