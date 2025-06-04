import Layout from '../../components/Layout/Layout'
import Card from '../../components/UI/Card/Card'
import Search from '../../components/UI/Search/Search'
import cards from '../../card.json'
import css from './index.module.scss'

const Home = () => {
  return (
    <>
      <Layout />
      <section className={css.section}>
        <div className="container">
          <div className={css.GameBoostPromo}>
            <img width={160} src="/src/assets/Other/score.svg" />
            <h1 className={css.title}>
              Get to <span style={{ color: 'rgb(122, 89, 255)' }}>enjoy</span> the game today
            </h1>
            <p className={css.description}>
              With our PROs, it became POSSIBLE. Don't spend your precious time and nerves on routine — GET cheap and
              hassle-free boost NOW!
            </p>
            <Search placeholder="Enter name of game" />
          </div>
          <div className={css.cardList}>
            {cards.map((card) => (
              <Card key={card.id} image={card.src} name={card.name} count={card.count} />
            ))}
          </div>
          <button className={css.ShowButton}>Show More</button>
        </div>
      </section>
    </>
  )
}

export default Home
