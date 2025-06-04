import { NavLink } from 'react-router-dom'
import css from './index.module.scss'
import { useState } from 'react'
import DropMenu from '../DropMenu/DropMenu'
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

const Header = () => {
  const [open, SetOpen] = useState(false)
  const [selectGame, setSelectGame] = useState('World of Warcraft')
  const [country, setCountry] = useState('ENG')
  const [currency, setCurrency] = useState('EUR')

  const countries = [{ name: 'ENG' }, { name: 'RUS' }, { name: 'GER' }]
  const currencies = [{ name: 'EUR' }, { name: 'USD' }, { name: 'RUB' }]

  return (
    <header className={css.header}>
      <div className="container">
        <div className={css.headerContent}>
          <NavLink to="/">
            <img src="/src/assets/Logo/logo.svg" />
          </NavLink>
          <div className={css.gameSelect} onClick={() => SetOpen(!open)}>
            <img src="/src/assets/Logo/game-logo.svg" />
            <span className={css.gameName}>{selectGame}</span>
            <span className={css.region}>EU</span>
            <span className={open ? css.arrowActive : css.arrow}>&gt;</span>
          </div>
          {open && <DropMenu />}
          <nav className={css.nav}>
            <ul className={css.menu}>
              <NavLink className={css.menuItem} to="/about">
                About us
              </NavLink>
              <NavLink className={css.menuItem} to="/reviews">
                Reviews
              </NavLink>
              <NavLink className={css.menuItem} to="/contacts">
                Contacts
              </NavLink>
              <NavLink className={css.menuItem} to="/articles">
                Articles
              </NavLink>
              <NavLink className={css.menuItem} to="/work">
                Work with us
              </NavLink>
            </ul>
          </nav>
          <button className={css.search}>
            <img src="/src/assets/Other/search.svg" />
          </button>
          <div className={css.selectGroup}>
            <Box>
              <FormControl variant="standard" fullWidth>
                <Select
                  sx={{
                    color: 'white',
                    '.MuiOutlinedInput-notchedOutline': {
                      borderColor: 'white',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(255, 255, 255, 0.8)',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'white',
                    },
                    '.MuiSvgIcon-root': {
                      color: 'white',
                    },
                    '.MuiInputBase-input': {
                       display: 'flex',
                       alignItems: 'center',
                       gap: '5px'
                    },
                  }}
                  className={css.select}
                  value={country}
                  label="Country"
                  onChange={(e) => setCountry(e.target.value)}
                  disableUnderline
                >
                  {countries.map((c) => (
                    <MenuItem className={css.country} key={c.name} value={c.name}>
                      <img src={`/src/assets/Country/${c.name}.svg`} />
                      {c.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box>
              <FormControl variant="standard" fullWidth>
                <Select
                  sx={{
                    color: 'white',
                    '.MuiOutlinedInput-notchedOutline': {
                      borderColor: 'white',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(255, 255, 255, 0.8)',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'white',
                    },
                    '.MuiSvgIcon-root': {
                      color: 'white',
                    },
                    '.MuiInputBase-input': {
                       display: 'flex',
                       alignItems: 'center',
                       gap: '5px'
                    },
                  }}
                  className={css.select}
                  value={currency}
                  label="Currency"
                  onChange={(e) => setCurrency(e.target.value)}
                  disableUnderline
                >
                  {currencies.map((c) => (
                    <MenuItem className={css.currency} key={c.name} value={c.name}>
                      <img src={`/src/assets/Currency/${c.name}.svg`} />
                      {c.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </div>
          <button className={css.Authorization}>Authorization</button>
        </div>
      </div>
    </header>
  )
}

export default Header
