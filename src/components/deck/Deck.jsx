import React, {useContext} from 'react';
import "./deck.scss"
import {Context} from "../../store/context";
const Deck = ({backImg, name, menu, deck}) => {

    const {stageEncounterCard} = useContext(Context)

    const onClickHandler = () =>{
        stageEncounterCard(deck)
    }

    if(!deck.length) return null

    return (

        <div className='board__deck'>
            <span className='deck__name'>{name + '-' + deck.length}</span>
            <div className='deck__image-div' onClick={onClickHandler}>
                <img className='image-div__img' src={backImg} alt={name}/>
            </div>
            <div className='deck__menu'>{menu}</div>
        </div>
    );
};

export default Deck;