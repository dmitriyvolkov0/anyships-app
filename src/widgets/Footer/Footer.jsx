import s from './style.module.css';

import { Box } from '@mui/material';
import MoreBut from '@components/MoreBut/MoreBut';

import WhatsappIcon from '@assets/img/social/whatsapp.svg';
import FbIcon from '@assets/img/social/fb.svg';
import InstIcon from '@assets/img/social/inst.svg';

export default function Footer() {
    return (
        <>
            <MoreBut />
            <Box className={s.footer}>
                <Box className={s.container}>
                    <Box>
                        <span>По всем вопросам +971 58 517 4744</span>
                    </Box>
                    <Box className={s.social}>
                        <a href="#">
                            <img src={WhatsappIcon} alt="Whatsapp" />
                        </a>
                        <a href="#">
                            <img src={FbIcon} alt="facebook" />
                        </a>

                        <a href="#">
                            <img src={InstIcon} alt="instagram" />
                        </a>
                    </Box>
                    <Box>
                        <a className={s.policy} href="#">Политика конфиденциальности</a>
                    </Box>
                </Box>
            </Box>

            {/* mobile */}
            <Box className={s.mobileFooter}>
                <p>Rental yacht - customer service</p>
                <p>+971 58 517 4744</p>
                <a className={s.mobileWhatsapp} href="#">
                    <img src={WhatsappIcon} alt="Whatsapp" />
                    WhatApp us
                </a>
                <p>Dubai, United Arab Emirates</p>
            </Box>
        </>
    )
}
