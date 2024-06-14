import s from './style.module.css';

import { Box } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

export default function MoreBut() {
  return (
    <Box className={s.wrapper}>
        <AddIcon className={s.icon}/>
        <span className={s.text}>Показать больше яхт</span>
    </Box>
  )
}
