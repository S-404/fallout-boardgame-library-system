import React, {useContext} from 'react';
import {Context} from "../../../store/context";
import MyAccordion from "../../UI/myAccordion/MyAccordion";
import TrashList from "./TrashList";

const TrashArea = () => {

    const {trash} = useContext(Context)

    return (
        <div>
            <MyAccordion
                items={[{
                    id: 1,
                    title: `trash (${trash.length})`,
                    content:<TrashList/>
                }]}/>
        </div>
    );
};

export default TrashArea;