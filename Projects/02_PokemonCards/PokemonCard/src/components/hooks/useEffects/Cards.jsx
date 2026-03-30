import styles from './Pokemon.module.css'

function Cards({PokemonName , PokemonUrl ,key} ) {
  return (
    <>
      <div className={styles.CardContainer} key={key}>
        <h3 className={styles.Heading3}>{PokemonName}</h3>
        <img className={styles.CardImage} src={PokemonUrl} alt={PokemonName} />
      </div>
    </>
  )
}

export default Cards
