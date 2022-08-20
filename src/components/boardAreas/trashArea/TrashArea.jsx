import React ,{useMemo} from 'react';
import MyAccordion from "../../UI/myAccordion/MyAccordion";
import CardsController from "../../../store/cardsController";
import {observer} from "mobx-react-lite";
import TrashListItem from "./TrashListItem";

const TrashArea = observer ( () => {

    const {trash} = CardsController

    const TrashList = () => {

        const reversedTrash = useMemo(() => [...trash].reverse(), [trash])

        return (
            <div>
                {reversedTrash.map(card => (
                    <TrashListItem card={card} key={card.id}/>
                ))}
            </div>
        );
    };



    return (
        <div>
            <MyAccordion
                items={[{
                    id: 1,
                    title: `trash (${trash.length})`,
                    content: <TrashList/>
                }]}/>
        </div>
    );
});

export default TrashArea;