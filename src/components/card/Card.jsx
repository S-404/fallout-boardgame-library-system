import React from 'react';
import './card.scss'
import CardMenu from "./CardMenu";

const Card = ({card, collection, title}) => {
    return (
        <div className='card'>
            <CardMenu card={card} collection={collection} title={title}/>
        </div>
    );
};

export default Card;