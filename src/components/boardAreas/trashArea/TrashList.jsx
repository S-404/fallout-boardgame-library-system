import React, {useContext, useMemo} from 'react';
import {Context} from "../../../store/context";
import TrashListItem from "./TrashListItem";

const TrashList = () => {

    const {trash} = useContext(Context)

    const reversedTrash = useMemo(() => [...trash].reverse(), [trash])

    return (
        <div>
            {reversedTrash.map(card => (
                <TrashListItem card={card} key={card.id}/>
            ))}
        </div>
    );
};

export default TrashList;