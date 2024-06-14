import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import CloseIcon from '@mui/icons-material/Close';

import s from './style.module.css';

export default function ReserveModal({ isActiveSuccessModal, closeSuccessModal }) {

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={isActiveSuccessModal}
                onClose={closeSuccessModal}
                sx={{ padding: '0 15px' }}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={isActiveSuccessModal}>
                    <Box className={s.modalBody}>
                        <button onClick={closeSuccessModal} className={s.closeBut}>
                            <CloseIcon sx={{ fontSize: 18, color: '#B6B7BA' }} />
                            Закрыть
                        </button>
                        <Box className={s.row}>
                            <Box>
                                <h2 className={s.title}>Все отлично!</h2>
                                <p className={s.description}>Ваша заявка была успешно отправлена и в ближайшее время с вами свяжется специалист нашей компании, чтобы подтвердить информацию и сориентировать вас по вопросам.</p>

                                <button onClick={closeSuccessModal} className={s.sendBut}>Далее</button>
                                <p className={s.policy}>Пользуясь данной формой вы соглашаетесь с <a href="#">политикой компании</a></p>
                            </Box>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}