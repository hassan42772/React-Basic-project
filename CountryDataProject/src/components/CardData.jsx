import style from './Card.module.css';
const CardData = ({countriesData }) => {

  const CardBg = {
    backgroundColor : `${countriesData.name.common.length > 10 ? 'lightblue' : 'lightgreen'}`,
    width : '200px',
    maxwidth : '250px',
    borderRadius : '15px',
    boxShadow : '0 8px 20px rgba(0, 0, 0, 0.1)',
    padding : '20px',
    textalign : 'center',
    transition : 'transform 0.3s ease',
  }

  return(
    <> 
        <section className={style.mainContainer}>
        <div className={style.cardContainer} style={CardBg}>
        <img src={countriesData.flags.png} alt="photo" width='150px' />
        <h2>name:{countriesData.name.common}</h2>
        <p>{countriesData.name.official}</p>
        </div>
        </section>
        </>
  )
}

export default CardData;
