import React from 'react';
import CardsController from "../../../store/cardsController";
import {observer} from "mobx-react-lite";
import MyIconButton from "../../UI/myButton/MyIconButton";
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';

const TrashListItem = observer(({card}) => {

    const {selectCardFrom, trash} = CardsController

    const onClickHandler = () => {
        selectCardFrom(card, trash)
    }

    return (
        <div>
            <span>{card.name}</span>
            <MyIconButton
                titleText='restore - select card'
                icon={<RestoreFromTrashIcon />}
                onClick={onClickHandler}
            />
        </div>
    );
});

export default TrashListItem;