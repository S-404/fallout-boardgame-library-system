import * as React from 'react';
import {useState} from 'react';
import {styled} from '@mui/material/styles';
import Tooltip, {tooltipClasses} from '@mui/material/Tooltip';
import CircleIcon from '@mui/icons-material/Circle';
import IconButton from "@mui/material/IconButton";

const PickColorsTooltip = styled(({className, ...props}) => (
    <Tooltip {...props} classes={{popper: className}}/>
))(({theme}) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#f5f5f9',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #dadde9',
    },
}));

export default function Marker() {

    const [markerColor, setMarkerColor] = useState('gray')
    const colors = ['red', 'green', 'blue', 'orange', 'gray']

    return (
        <div>
            <PickColorsTooltip
                enterDelay={500} leaveDelay={200}
                title={
                    <>
                        {colors.map(color => (
                            <IconButton
                                key={`marker_color_${color}`}
                                onClick={() => setMarkerColor(color)}
                            >
                                <CircleIcon sx={{color}}/>
                            </IconButton>

                        ))}
                    </>
                }
            >
                <IconButton
                    size="small"
                >
                    <CircleIcon
                        fontSize="inherit"
                        sx={{color: markerColor}}
                    />
                </IconButton>
            </PickColorsTooltip>
        </div>
    );
}
