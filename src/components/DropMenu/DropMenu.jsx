import { useState } from 'react'
import css from './index.module.scss'
import gameData from '../../gameData.json'

const DropMenu = () => {
  const [activeGame, setActiveGame] = useState(null)

  return (
    <nav className={css.dropMenu}>
      <div className={css.leftBar}>
        <h2 className={css.title}>GAME</h2>
        <ul className={css.gameList}>
        {gameData.map((game) => (
          <li key={game.id} className={css.gameItem}>
            <button className={css.gameButton}>{game.name}</button>
            <span className={css.arrow}>&gt;</span>
          </li>
        ))}
      </ul>
      </div>
    </nav>
  )
}

export default DropMenu
