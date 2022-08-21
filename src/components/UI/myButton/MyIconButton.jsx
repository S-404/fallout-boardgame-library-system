import React from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const MyIconButton = ({titleText,icon,onClick}) => {
    return (
        <Tooltip
            title={titleText}
            placement="top"
            arrow
        >
            <IconButton
                aria-label={titleText}
                size="small"
                onClick={onClick}
            >
                {icon}
            </IconButton>
        </Tooltip>
    );
};

export default MyIconButton;