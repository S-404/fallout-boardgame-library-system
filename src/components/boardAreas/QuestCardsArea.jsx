import React, {useState, useContext} from 'react';
import Deck from "../deck/Deck";
import questImg from '../../assets/questCardBack.png'

import {Context} from "../../store/context";

const QuestCardsArea = () => {

    const [cardNum, setCardNum] = useState('000')
    const [selectedCard, setSelectedCard] = useState(null)
    const {questsDeck, addCardFrom, stageCardFrom} = useContext(Context)

    const onInputChange = (e) => {
        setCardNum(e.target.value)
        const cardIndex = questsDeck.findIndex(card => card.num === e.target.value.padStart(3,'0'))
        setSelectedCard(cardIndex !== -1 ? questsDeck[cardIndex] : null)
    }

    const stageButtonHandler = () => {
        stageCardFrom(selectedCard, questsDeck)
    }

    const addButtonHandler = () => {
        addCardFrom(selectedCard,questsDeck)
    }


    const questCardsMenu = () => {
        return (
            <div className='menu__menu-inputs'>
                <input
                    className='menu-inputs__input'
                    placeholder='card num'
                    maxLength='3'
                    value={cardNum}
                    onChange={onInputChange}
                />
                <div className='menu-inputs__buttons'>
                    {selectedCard === null ? 'not found' :
                        selectedCard?.type === 'quest' ?
                            <button onClick={stageButtonHandler}>Stage</button> :

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