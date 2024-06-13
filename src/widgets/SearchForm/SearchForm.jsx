import React from 'react'
import { Container } from '@mui/material';
import s from './style.module.css';
import { Box } from '@mui/material';

import TopBlock from './TopBlock/TopBlock';
import MiddleBlock from './MiddleBlock/MiddleBlock';
import BottomBlock from './BottomBlock/BottomBlock';

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
        
        <Box sx={{maxWidth: '824px', margin: '0 auto'}}>
          <TopBlock searchFromProps={searchFromProps}/>
          <MiddleBlock searchFromProps={searchFromProps}/>
          <BottomBlock />
        </Box>
      </Container>
    </>
  )
}
