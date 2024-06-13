import s from './style.module.css';

import logoImg from '@assets/img/logo.svg';
import ButtonOutline from '@components/ButtonOutline/ButtonOutline';
import LoginIcon from '@mui/icons-material/Login';

export default function Nav() {
  return (
    <div className={s.nav}>
        <div></div>
        <img className={s.logoImg} width="210" height="41" src={logoImg} alt="anyships" />
        <ButtonOutline style={{marginLeft: 'auto'}} Icon={LoginIcon}>Войти</ButtonOutline>
    </div>
  )
}
