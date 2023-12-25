import { useState } from "react"
import Card from "../Card/Card.jsx"
import data from "../../data.json"

import style from "./App.module.scss"

function App() {
  const [selectedCard, setSelectedCard] = useState(3);

  const handleCardSelect = (id) => {
    setSelectedCard(id);
  };

  return (
    <>
      <div className={style.container}>
        <h1>Тарифы</h1>
        <div className={style.cards_wrapper}>
          {data.map((item)=>(
            <Card {...item} key={item.id} isSelected={selectedCard === item.id} onSelect={handleCardSelect}/>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
