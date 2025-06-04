import css from './search.module.scss'

const Search = ({ placeholder = '' }) => {
  return (
    <div className={css.search}>
      <img src="/src/assets/Other/search.svg"/>
      <input className={css.input} type="text" placeholder={placeholder} />
    </div>
  )
}

export default Search
