import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
    { value: 6, label: '6' },
    { value: 7, label: '7' },
    { value: 8, label: '8' },
    { value: 9, label: '9' },
    { value: 10, label: '10' },
    { value: 11, label: '11' },
    { value: 12, label: '12' },
    { value: 13, label: '13' },
    { value: 14, label: '14' },
    { value: 15, label: '15' },
    { value: 16, label: '16' },
    { value: 17, label: '17' },
    { value: 18, label: '18' },
    { value: 19, label: '19' },
    { value: 20, label: '20' },
    { value: 21, label: '21' },
    { value: 22, label: '22' },
    { value: 23, label: '23' },
    { value: 24, label: '24' },

];

function valuetext(value: number) {
    return `${value}°C`;
}

export default function TimeSlider({ startTime, setStartTime, props }) {
    return (
        <Slider
            {...props}
            sx={{width: '100%', maxWidth: '100%'}}
            aria-label="Выберите время"
            defaultValue={14}
            getAriaValueText={valuetext}
            step={1}
            min={1}
            max={24}
            marks={marks}
            valueLabelDisplay="auto"
            value={startTime}
            onChange={e => setStartTime(e.target.value)}
        />
    );
}