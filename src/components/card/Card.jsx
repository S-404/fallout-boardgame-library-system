import React, { useState } from 'react';
import './card.scss'
import CardMenu from "./cardMenu/CardMenu";

const Card = ({ card, collection }) => {

    const [clicked, setClicked] = useState(false)

    const image = () => {
        try {
            return require(`../../assets/cards/libraryCards/${card.name}.png`)
        } catch (e) {
            return ''
        }
    }

    const clickHandler = () => {
        setClicked(!clicked)
    }

    return (
        <div className={`card card_${clicked ? 'clicked' : ''}`}
            onClick={clickHandler}
        >
            <CardMenu card={card} collection={collection} />
            <div className='card__card-image-div'>
                <img
                    className='card-image-div__image'
                    src={image()}
                    alt={`card ${card.name} ${card.id}`}
                />
            </div>
        </div>
    );
};

export default Card;