import React from 'react';
import "./deck.scss"
const Deck = ({backImg, name, menu}) => {

    return (

        <div className='board__deck'>
            <span className='deck__name'>{name}</span>
            <div className='deck__image-div'>
                <img className='image-div__img' src={backImg} alt={name}/>
            </div>
            <div className='deck__menu'>{menu}</div>
        </div>
    );
};

export default Deck;