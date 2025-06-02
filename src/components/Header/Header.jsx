import { NavLink } from 'react-router-dom'
import css from './index.module.scss'
import { useState } from 'react'
import DropMenu from '../DropMenu/DropMenu'

const Header = () => {
  const [open, SetOpen] = useState(false)
  const [activeGame, setActiveGame] = useState(null)
  const [selectGame, setSelectGame] = useState('World of Warcraft')

  return (
    <header className={css.header}>
      <div className="container">
        <div className={css.headerContent}>
          <NavLink to="/">
            <img src="/src/assets/logo.svg" />
          </NavLink>
          <div className={css.gameSelect} onClick={() => SetOpen(!open)}>
            <img src="/src/assets/game-logo.svg" />
            <span className={css.gameName}>{selectGame}</span>
            <span className={css.region}>EU</span>
            <span className={open ? css.arrowActive : css.arrow}>&gt;</span>
          </div>
          {open && <DropMenu />}
        </div>
      </div>
    </header>
  )
}

export default Header
