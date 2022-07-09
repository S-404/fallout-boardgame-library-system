import React, {useContext} from 'react';
import {Context} from "../../../store/context";
import Card from "../../card/Card";

const SelectedCardArea = () => {

    const {selectedCard} = useContext(Context)

    if(!selectedCard[0]?.id) return null

    return (
        <div className=''>
            <Card
                card={selectedCard[0]}
                collection={selectedCard}
                title={`${selectedCard[0].num} - Selected`}
            />
        </div>
    );
};

export default SelectedCardArea;