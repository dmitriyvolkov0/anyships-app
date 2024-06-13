import s from './style.module.css';
import { Box } from '@mui/material';
import { formatDate } from '@utils/helpers/formatDate.js';

export default function TopBlock({ searchFromProps }) {
  
  const onPersonsCount = (e) => searchFromProps.setPersonsCount(e.target.value);
  const onHoursCount = (e) => searchFromProps.setHoursCount(e.target.value);
  const onChangeDate = (e) => searchFromProps.setDate(e.target.value);
  
  return (
    <Box className={s.wrapper}>
        <Box className={s.inputWrapper}>
          <label htmlFor="inp-1" className={s.inputLabel}>Количество персон</label>
          <input 
            value={searchFromProps.personsCount} 
            onChange={onPersonsCount}
            id="inp-1" 
            className={s.input} 
            type="number" 
            min="1" max="99" 
          />
        </Box>

        <Box className={s.inputWrapper}>
          <label htmlFor="inp-2" className={s.inputLabel}>Количество часов</label>
          <input 
            value={searchFromProps.hoursCount} 
            onChange={onHoursCount}
            id="inp-2" 
            className={s.input}
            type="number" 
            min="1" max="99" 
          />
        </Box>

        <Box className={s.inputWrapper}>
          <label htmlFor="inp-3" className={s.inputLabel}> {searchFromProps.date ? formatDate(searchFromProps.date) : "Дата"}</label>
          <input 
            value={searchFromProps.date} 
            onChange={onChangeDate}
            className={s.input + ' ' + s.inputDate} 
            id="inp-3" 
            type="date" 
            min="1" max="99"
          />
        </Box>
    </Box>
  )
}
