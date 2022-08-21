import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const MySelect = ({title, options, ...props}) => {
    return (

        <FormControl variant="standard" size='small'>
            {title ? <InputLabel id={`${title}-select-standard-label`}>{title}</InputLabel> : null}
            <Select
                labelId={`${title}-select-standard-label`}
                id={`${title}-select-standard`}
                label={title}
                name={title}
                {...props}
            >
                {options.map(option => (
                    <MenuItem
                        key={`select_option_${option.value}`}
                        value={option.value}
                    >
                        {option.name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default MySelect;