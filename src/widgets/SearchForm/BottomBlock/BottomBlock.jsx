import s from './style.module.css';

export default function BottomBlock() {
  return (
    <button className={s.button}>
        <div className={s.title}>Найти яхту по фильтру</div>
        <div className={s.subtitle}>Для 8 человек на 16 часов - 25 февраля 2024 с 15:00</div>
    </button>
  )
}
