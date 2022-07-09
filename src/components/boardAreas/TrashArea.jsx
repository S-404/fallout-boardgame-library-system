import React, {useContext} from 'react';
import {Context} from "../../store/context";
import MyAccordion from "../UI/myAccordion/MyAccordion";

const TrashArea = () => {
    const {trash} = useContext(Context)

    const trashList = () => {
        return (
            <div>
                {trash.map(card => (
                        <div key={card.id}>{card.num}</div>
                    ))}
            </div>
        );
    }


    return (
        <div>

            <MyAccordion
                items={[{
                    id: 1,
                    title: `trash (${trash.length})`,
                    content:trashList()
                }]}/>

        </div>
    );
};

export default TrashArea;