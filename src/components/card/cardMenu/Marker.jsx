import React from 'react';
import MySelect from "../../UI/mySelect/MySelect";

const Marker = () => {

    const markerOptions = [
        {name:'marker',value:''},
        {name:'red',value:'red'},
        {name:'green',value:'green'},
        {name:'blue',value:'blue'},
    ]

    return (
        <div>
           <MySelect
               options={markerOptions}
           />
        </div>
    );
};

export default Marker;