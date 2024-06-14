import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import CloseIcon from '@mui/icons-material/Close';
import img from '@assets/img/modal/img.jpg';

import s from './style.module.css';

export default function ReserveModal({ isActiveReserveModal, closeReverseModal, showSuccessModal }) {

    const sendForm = () =>{
        closeReverseModal();
        showSuccessModal();
    }
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={isActiveReserveModal}
                onClose={closeReverseModal}
                sx={{padding: '0 15px'}}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={isActiveReserveModal}>
                    <Box className={s.modalBody}>
                        <button onClick={closeReverseModal} className={s.closeBut}>
                            <CloseIcon sx={{ fontSize: 18, color: '#B6B7BA'}}/>
                            Закрыть
                        </button>
                        <Box className={s.row}>
                            <Box>
                                <img className={s.img} src={img} alt="Бронирование яхты" />
                            </Box>
                            <Box>
                                <h2 className={s.title}>Бронирование яхты</h2>
                                <p className={s.description}>Заполните форму ниже, чтобы забронировать яхту, после чего наши специалисты свяжутся с вами, чтобы уточнить детали.</p>

                                <Box className={s.form}>
                                    <Box className={s.formRow}>
                                        <Box className={s.inputWrapper}>
                                            <label htmlFor="inp-7" className={s.inputLabel}>Количество персон</label>
                                            <input
                                                className={s.input}
                                                id="inp-7"
                                                type="number"
                                                min="1" max="99"
                                                value={3}
                                                onChange={() => {}}
                                            />
                                        </Box>
                                        <Box className={s.inputWrapper}>
                                            <label htmlFor="inp-7" className={s.inputLabel}>Количество персон</label>
                                            <input
                                                className={s.input}
                                                id="inp-7"
                                                type="number"
                                                min="1" max="99"
                                                defaultValue={16}
                                                onChange={() => { }}
                                            />
                                        </Box>
                                    </Box>
                                    <Box className={s.inputWrapper}>
                                        <input
                                            className={s.input2}
                                            id="inp-7"
                                            type="text"
                                            defaultValue="Иванов Кирилл Иванович"
                                            onChange={() => { }}
                                        />
                                        <label htmlFor="inp-7" className={s.inputLabel2}>ФИО</label>
                                    </Box>
                                    <Box className={s.inputWrapper}>
                                        <input
                                            className={s.input2}
                                            id="inp-7"
                                            type="text"
                                            defaultValue="+7 (999) 650-50-50"
                                            onChange={() => { }}
                                        />
                                        <label htmlFor="inp-7" className={s.inputLabel2}>Номер телефона</label>
                                    </Box>
                                    <button onClick={sendForm} className={s.sendBut}>Отправить</button>
                                    <p className={s.policy}>Пользуясь данной формой вы соглашаетесь с <a href="#">политикой компании</a></p>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}