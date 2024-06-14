import React from 'react';
import s from './style.module.css'
import { Box } from '@mui/material'

import Ship from '@components/Ship/Ship';

export default function Ships({ ships, showReserveModal }) {
    return (
        <Box>
            <Box className={s.container}>
                {
                    ships && ships.map((item, index) =>
                        <Ship 
                            key={index}
                            imgSrc={item.imgSrc}
                            title="Яхта Azimut 68 Princess"
                            recommendedPrice={item.recommendedPrice}
                            curPrice={item.curPrice}
                            length={item.length}
                            capacity={item.capacity}
                            unavailable={item.unavailable}
                            showReserveModal={showReserveModal}
                        />
                    )
                }
            </Box>
        </Box>
    )
}
