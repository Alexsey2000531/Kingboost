import css from './card.module.scss'

const Card = ({key, image, name, count }) => {
  return (
    <article key={key} className={css.card}>
      <img className={css.image} src={image} />
      <div className={css.content}>
        <h3 className={css.title}>{name}</h3>
        <div className={css.cardItem}>{count} ITEMS</div>
      </div>
    </article>
  )
}

export default Card
