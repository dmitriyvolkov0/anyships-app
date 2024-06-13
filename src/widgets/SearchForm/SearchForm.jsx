import React from 'react'
import { Container } from '@mui/material';
import s from './style.module.css';
import { Box } from '@mui/material';

import Inputs from './Inputs/Inputs';

export default function SearchForm({ searchFromProps }) {
  return (
    <>
      <Container>
        <Box sx={{display: {xs: 'block', sm: 'none'}}}>
          <h1 className={s.mobileTitle}>Бронирование яхт в Дубае</h1>
        </Box>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <h1 className={s.title}>Сервис бронирования яхт</h1>
        </Box>
        
        <Inputs searchFromProps={searchFromProps}/>

      </Container>
    </>
  )
}
