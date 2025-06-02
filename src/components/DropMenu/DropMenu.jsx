import { useState } from 'react'
import css from './index.module.scss'
import gameData from '../../gameData.json'
import servicesGame from '../../servicesGame.json'

const DropMenu = () => {
  const [activeGame, setActiveGame] = useState(null)
  const [activeService, setActiveService] = useState(null)

  return (
    <nav className={css.dropMenu}>
      <div className={css.leftBar}>
        <h2 className={css.title}>GAME</h2>
        <ul className={css.gameList}>
          {gameData.map((game) => (
            <li
              onClick={() => setActiveGame(game.id)}
              key={game.id}
              className={activeGame === game.id ? css.gameItemActive : css.gameItem}
            >
              <button className={css.gameButton}>{game.name}</button>
              <span className={css.arrow}>&gt;</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={css.rightBar}>
        <h2 className={css.title}>GAME SERVICES</h2>
        <ul className={css.gameList}>
          {servicesGame.map((service, index) => (
            <li key={index} className={css.gameServicesItem}>
              <div className={css.serviceHeader}>
                <span className={css.serviceName}>{service.name}</span>
              </div>
              {service.options.length > 0 && (
                <ul className={css.optionsList}>
                  {service.options.map((option, optIndex) => (
                    <li
                      onClick={() => setActiveService(optIndex)}
                      key={optIndex}
                      className={activeService === optIndex ? css.optionActiveItem : css.optionItem}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default DropMenu
