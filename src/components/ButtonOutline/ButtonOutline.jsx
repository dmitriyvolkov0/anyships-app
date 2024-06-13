import s from './style.module.css';

export default function ButtonOutline({ Icon, style, children }) {
    
    return (
        <button className={s.but} style={style}>
            <span className={s.text}>{children}</span>
            {Icon && <Icon className={s.icon}/>}
        </button>
    )
}
