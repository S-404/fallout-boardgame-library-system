import React from 'react';
import Deck from "../../deck/Deck";
import questImg from '../../../assets/questCardBack.png'
import QuestCardsMenu from "./QuestCardsMenu";
import CardsController from "../../../store/cardsController";
import {observer} from "mobx-react-lite";

const QuestCardsArea = observer(() => {

    const {questsDeck} = CardsController

    return (
        <Deck
            name={'Quests'}
            backImg={questImg}
            menu={<QuestCardsMenu/>}
            deck={questsDeck}
        />
    );
});

export default QuestCardsArea;