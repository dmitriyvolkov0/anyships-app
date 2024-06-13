import { Box } from '@mui/material'
import s from './style.module.css';
import TimeSlider from '@components/TimeSlider/TimeSlider';
import PriceSlider from '@components/PriceSlider/PriceSlider';

export default function MiddleBlock({ searchFromProps }) {
  

  return (
    <Box className={s.blocksContainer}>
      <Box className={s.block}>
        <Box className={s.top}>
          <label className={s.title} htmlFor='inp-4'>Время начала</label>
          <input value={searchFromProps.startTime} id="inp-4" className={s.indicator} type="text" readOnly/>
        </Box>
        <Box className={s.bottom}>
          <TimeSlider 
            startTime={searchFromProps.startTime}
            setStartTime={searchFromProps.setStartTime}/>
        </Box>
      </Box>

      <Box className={s.block}>
        <Box className={s.top}>
          <label className={s.title} htmlFor='inp-4'>Цена / час</label>
          <Box className={s.indicatorsCointainer}>
            <input value={searchFromProps.price[0]} id="inp-4" className={s.indicator} type="text" readOnly />
            <span>-</span>
            <input value={searchFromProps.price[1]} id="inp-4" className={s.indicator} type="text" readOnly />
          </Box>
        </Box>
        <Box className={s.bottom}>
          <PriceSlider 
            price={searchFromProps.price}
            setPrice={searchFromProps.setPrice}
          />
        </Box>
      </Box>
    </Box>
  )
}