import style from "./Card.module.scss"

export default function Card({ data }) {
  console.log(data.class);
  return (
    <>
      <div className={`${style.card} ${style[data.color]} ${data.class ? style[data.class] : ""}`}>

        <div className={style.title}>
          <p>Безлимитный {data.value}</p>
        </div>
        
        <div className={style.price}>
          <p><span className={style.currency}><sup>руб</sup></span>{data.value}<span className={style.interval}>/мес</span></p>
        </div>

        <div className={style.speed}>
          <p>до {data.speed} Мбит/сек</p>
        </div>

        <div className={style.description}>
          <p>{data.description}</p>
        </div>

      </div>
    </>
  );
}