import React, {useState} from 'react';
import CardsController from "../../../store/cardsController";
import {observer} from "mobx-react-lite";


const QuestCardsMenu = observer (() => {

    const [cardNum, setCardNum] = useState('000')
    const [selectedCard, setSelectedCard] = useState(null)
    const {questsDeck, addCardFrom, stageCardFrom} = CardsController


    const onInputChange = (e) => {
        setCardNum(e.target.value)
        const cardIndex = questsDeck.findIndex(card => card.num === e.target.value.padStart(3, '0'))
        setSelectedCard(cardIndex !== -1 ? questsDeck[cardIndex] : null)
    }

    const stageButtonHandler = () => {
        stageCardFrom(selectedCard, questsDeck)
    }

    const addButtonHandler = () => {
        addCardFrom(selectedCard, questsDeck)
    }

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

                {selectedCard === null ?
                    'not found' :
                    selectedCard?.type === 'quest' ?
                        <button onClick={stageButtonHandler}>Stage</button>
                        :
                        <button onClick={addButtonHandler}>Add</button>
                }

            </div>

        </div>
    )
});

export default QuestCardsMenu;