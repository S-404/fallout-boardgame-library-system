import React from 'react';
import Marker from "./Marker";
import CardsController from "../../../store/cardsController";
import {observer} from "mobx-react-lite";
import DeleteIcon from "@mui/icons-material/Delete";
import InputIcon from '@mui/icons-material/Input';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import MyIconButton from "../../UI/myButton/MyIconButton";

const CardMenu = observer(({card, collection}) => {

    const {stagedCards, addCardFrom, stageCardFrom, putInTrashFrom,putAwayCardFrom} = CardsController


    const trashButtonHandler = () => {
        putInTrashFrom(card, collection)
    }
    const putAwayButtonHandler = () => {
        putAwayCardFrom(card, collection)
    }
    const stageButtonHandler = () => {
        stageCardFrom(card, collection)
    }
    const addButtonHandler = () => {
        addCardFrom(card, collection)
    }

    return (
        <div className='card__card-menu'>
            <MyIconButton
                titleText='delete'
                icon={<DeleteIcon fontSize="inherit"/>}
                onClick={trashButtonHandler}
            />

            {collection !== stagedCards ?
                <MyIconButton
                    titleText='stage'
                    icon={<InputIcon fontSize="inherit"/>}
                    onClick={stageButtonHandler}
                />
                : null}


            {card.type !== 'quest' ?
                <>
                    <MyIconButton
                        titleText='add'
                        icon={<LibraryAddIcon fontSize="inherit"/>}
                        onClick={addButtonHandler}
                    />
                    <MyIconButton
                        titleText='put away'
                        icon={<KeyboardReturnIcon fontSize="inherit"/>}
                        onClick={putAwayButtonHandler}
                    />

                </>

                : null}

            <Marker card={card}/>
        </div>
    );
});

export default CardMenu;