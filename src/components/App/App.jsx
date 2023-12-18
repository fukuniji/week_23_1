import Card from "../Card/Card.jsx"
import data from "../../data.json"

import style from "./App.module.scss"

function App() {
  return (
    <>
      <div className={style.container}>
        <h1>Тарифы</h1>
        <div className={style.cards_wrapper}>
          {data.map((item)=>(
            <Card data={item} key={item.id}/>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
