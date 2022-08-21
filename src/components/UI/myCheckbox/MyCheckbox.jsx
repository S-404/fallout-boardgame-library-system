import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const MyCheckbox = ({labelText, isChecked, onChange}) => {

    return (
        <FormGroup>
            <FormControlLabel
                control={
                <Checkbox
                    checked={isChecked}
                    onChange={onChange}
                />}
                label={labelText}/>
        </FormGroup>
    );
};

export default MyCheckbox;