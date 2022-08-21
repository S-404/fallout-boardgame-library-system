import React from 'react';
import './card.scss'
import CardMenu from "./cardMenu/CardMenu";

const Card = ({card, collection}) => {

    const image = () => {
        try {
            return require(`../../assets/cards/libraryCards/${card.name}.png`)
        } catch (e) {
            return ''
        }
    }

    return (
        <div className='card'>
            <CardMenu card={card} collection={collection}/>
            <div className='card__card-image-div'>
                <img
                    className='card-image-div__image'
                    src={image()}
                    alt={`card ${card.name}`}
                />
            </div>
        </div>
    );
};

export default Card;