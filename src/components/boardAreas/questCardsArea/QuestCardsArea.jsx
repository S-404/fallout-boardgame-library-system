import React, {useContext} from 'react';
import Deck from "../../deck/Deck";
import questImg from '../../../assets/questCardBack.png'

import {Context} from "../../../store/context";
import QuestCardsMenu from "./QuestCardsMenu";

const QuestCardsArea = () => {

    const {questsDeck} = useContext(Context)

    return (
        <Deck
            name={'Quests'}
            backImg={questImg}
            menu={<QuestCardsMenu/>}
            deck={questsDeck}
        />
    );
};

export default QuestCardsArea;