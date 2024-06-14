import { Box } from "@mui/material";
import s from './style.module.css';
import EastIcon from '@mui/icons-material/East';

export default function Ship({ imgSrc, title, recommendedPrice, curPrice, length, capacity, unavailable, showReserveModal }) {
    
    return (
        <>
        {/* desktop */}
            <Box className={s.item + (unavailable ? ' ' + s.unavailable : ' ')} onClick={showReserveModal}>
                <img className={s.img} src={imgSrc} srcSet={imgSrc} alt={title} />
                <Box className={s.overlay}></Box>

                {unavailable && <span className={s.unavailableText}>Временно недоступно</span>}

                <button className={s.openBut}><EastIcon sx={{ fontSize: 18 }} /></button>
                <Box className={s.textContainer}>
                    <span className={s.title}>{title}</span>
                    <Box className={s.textRow}>
                        <span className={s.price}>{recommendedPrice} РУБ</span>
                        <span className={s.recommendations}>Рекомендованная цена</span>
                    </Box>

                    <Box className={s.hiddenRows}>
                        <Box className={s.textRow}>
                            <span className={s.price}>{curPrice} РУБ</span>
                            <span className={s.recommendations}>Текущая цена</span>
                        </Box>
                        <Box className={s.textRow}>
                            <span className={s.price}>{length} м</span>
                            <span className={s.recommendations}>Длина яхты</span>
                        </Box>
                        <Box className={s.textRow}>
                            <span className={s.price}>{capacity} чел.</span>
                            <span className={s.recommendations}>Вместимость</span>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* mobile */}
            <Box className={s.mobileItem} onClick={showReserveModal}>
                <img className={s.img} src={imgSrc} srcSet={imgSrc} alt={title} />
                
                <Box className={s.mobileOverlay}></Box>

                <Box className={s.mobileTextContainer}>
                    <span className={s.mobileTitle}>{title}</span>
                    <Box className={s.mobileTextRow}>
                        <Box className={s.mobileTextCol}>
                            <span className={s.mobileSubtitle}>{recommendedPrice} РУБ</span>
                            <span className={s.mobileSubtitle2}>Рек. цена</span>
                        </Box>
                        <Box className={s.mobileTextCol}>
                            <span className={s.mobileSubtitle}>{curPrice} РУБ</span>
                            <span className={s.mobileSubtitle2}>Текущая цена</span>
                        </Box>
                        <Box className={s.mobileTextCol}>
                            <span className={s.mobileSubtitle}>{length} м</span>
                            <span className={s.mobileSubtitle2}>Длина яхты</span>
                        </Box>
                        <Box className={s.mobileTextCol}>
                            <span className={s.mobileSubtitle}>{capacity} чел.</span>
                            <span className={s.mobileSubtitle2}>Вместимость</span>
                        </Box>
                    </Box>
                </Box>
            </Box>
        
        </>
  )
}
