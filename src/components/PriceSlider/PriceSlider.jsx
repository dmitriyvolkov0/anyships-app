import * as React from 'react';
import Slider from '@mui/material/Slider';
import { Box } from '@mui/material';

export default function RangeSlider({ price, setPrice }) {

    const MAX = 130000;
    const MIN = 5000;
    const marks = [
        {
            value: MIN,
            label: '',
        },
        {
            value: MAX,
            label: '',
        },
    ];

    const minMaxStyle = {
        color: '#505A68',
        fontSize: '11px'
    }

    const minMaxContainerStyle = {
        display: 'flex', 
        justifyContent: 'space-between',
        marginTop: '5px'
    }

    return (
        <Box>
            <Slider
                getAriaLabel={() => 'Temperature range'}
                value={price}
                onChange={(e, newValue) => setPrice(newValue)}
                valueLabelDisplay="auto"
                marks={marks}
                min={MIN}
                max={MAX}
            />
            <Box sx={minMaxContainerStyle}>
                <span style={minMaxStyle}>от {MIN} руб</span>
                <span style={minMaxStyle}>до 130 000 руб</span>
            </Box>
        </Box>
    );
}