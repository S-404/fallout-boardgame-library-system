import React, {useContext} from 'react';
import {Context} from "../../store/context";
import Card from "../card/Card";

const SelectedCardArea = () => {
    const {selectedCard,addCardFrom,stageCardFrom, moveCardToTrashFrom} = useContext(Context)
    if(!selectedCard[0]?.id) return null

    const trashButtonHandler = () =>{
        moveCardToTrashFrom(selectedCard[0],selectedCard)
    }
    const stageButtonHandler = () =>{
        stageCardFrom(selectedCard[0],selectedCard)
    }
    const addButtonHandler = () =>{
        addCardFrom(selectedCard[0],selectedCard)
    }

    const cardMenu = () =>{
        return (
         <div>
             <h5>Selected</h5>
             <button onClick={trashButtonHandler}>trash</button>
             <button onClick={stageButtonHandler}>stage</button>
             <button onClick={addButtonHandler}>add</button>
         </div>
        )
    }

    return (
        <div className=''>
            <Card
                card={selectedCard[0]}
                cardMenu={cardMenu()}
            />
        </div>
    );
};

export default SelectedCardArea;