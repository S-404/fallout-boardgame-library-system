import React, {useState, useContext} from 'react';
import Deck from "../deck/Deck";
import questImg from '../../assets/questCardBack.png'

import {Context} from "../../store/context";

const QuestCardsArea = () => {

    const [selectedCard, setSelectedCard] = useState({id:0, num:'000'})
    const {questsDeck,addCard, stageCardFrom} = useContext(Context)

    const onInputChange = (e) => {
        const cardIndex = questsDeck.findIndex(card=>card.num === e.target.value.padStart(3,'0'))
        setSelectedCard(questsDeck[cardIndex])
    }

    const stageButtonHandler = () => {
        stageCardFrom(selectedCard, questsDeck)
    }

    const addButtonHandler = () => {
        addCard(selectedCard)
    }



    const questCardsMenu = () => {
        return (
            <div className='menu__menu-inputs'>
                <input
                    className='menu-inputs__input'
                    type='number'
                    min='1'
                    max='222'
                    maxLength='3'
                    value={selectedCard.num}
                    onChange={onInputChange}
                />
                <div className='menu-inputs__buttons'>
                    {selectedCard.type === 'quest' ?
                        <button onClick={stageButtonHandler}>Stage</button>:
                        <button onClick={addButtonHandler}>Add</button>
                    }

                </div>

            </div>
        )
    }

    return (
        <Deck
            name={'Quests'}
            backImg={questImg}
            menu={questCardsMenu()}
            deck={questsDeck}
        />
    );
};

export default QuestCardsArea;