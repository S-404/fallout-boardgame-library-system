import React, {useContext} from 'react';
import {Context} from "../../../store/context";

const TrashList = () => {

    const {trash} = useContext(Context)

    return (
        <div>
            {trash.map(card => (
                <div key={card.id}>{card.num}</div>
            ))}
        </div>
    );
};

export default TrashList;