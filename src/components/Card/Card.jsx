import style from "./Card.module.scss"

export default function Card({ color, id, value, speed, description, isSelected, onSelect }) {

  return (
    <>
      <div className={`${style.card} ${style[color]} ${isSelected ? style.active : ""}`} onClick={() => onSelect(id)}>

        <div className={style.title}>
          <p>Безлимитный {value}</p>
        </div>
        
        <div className={style.price}>
          <p><span className={style.currency}><sup>руб</sup></span>{value}<span className={style.interval}>/мес</span></p>
        </div>

        <div className={style.speed}>
          <p>до {speed} Мбит/сек</p>
        </div>

        <div className={style.description}>
          <p>{description}</p>
        </div>

      </div>
    </>
  );
}